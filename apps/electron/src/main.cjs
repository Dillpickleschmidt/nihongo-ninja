// castLabs Electron main process. This fork includes the Widevine CDM.
// Desktop Chromium does not include it. The CDM is the reason to use Electron.
const path = require("node:path");
const fs = require("node:fs");
const { pathToFileURL } = require("node:url");
const {
  app,
  components,
  dialog,
  ipcMain,
  net,
  protocol,
  BrowserWindow,
  WebContentsView,
} = require("electron");

const DIST_DIR = path.join(__dirname, "../../tanstack-start/dist-electron");

// The web bundle uses absolute asset paths (/assets/...). These paths fail
// under file://. Serve the bundle over a custom scheme instead.
protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: { standard: true, secure: true, supportFetchAPI: true },
  },
]);

/** @type {BrowserWindow | null} */
let win = null;
/** @type {WebContentsView | null} */
let embedView = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
    },
  });

  const startUrl = process.env.ELECTRON_START_URL;
  if (startUrl) {
    void win.loadURL(startUrl);
  } else {
    // Load the client-rendered bundle (nub run -F @nn/tanstack-start build:electron).
    if (!fs.existsSync(path.join(DIST_DIR, "index.html"))) {
      dialog.showErrorBox(
        "No desktop bundle",
        `${DIST_DIR} is missing.\nRun \`nub run -F @nn/tanstack-start build:electron\` first, ` +
          "or set ELECTRON_START_URL to a dev server.",
      );
      app.exit(1);
      return;
    }
    void win.loadURL("app://bundle/");
  }

  win.on("closed", () => {
    win = null;
    embedView = null;
  });
}

// The Crunchyroll view. A WebContentsView is a native overlay, not DOM.
// It takes all input inside its bounds. App UI cannot draw on top of it.
// For the subtitle overlay, add a second transparent WebContentsView. Set its
// bounds to the interactive area only. Input outside those bounds goes to
// the Crunchyroll controls.
ipcMain.on("embed:open", (_event, url, bounds) => {
  if (!win) return;
  if (!embedView) {
    embedView = new WebContentsView();
    win.contentView.addChildView(embedView);
  }
  embedView.setBounds(bounds);
  void embedView.webContents.loadURL(url);
});

ipcMain.on("embed:close", () => {
  if (win && embedView) {
    win.contentView.removeChildView(embedView);
    embedView.webContents.close();
    embedView = null;
  }
});

// On Linux, the first CDM install needs an app restart. Record the first
// install. Ask the user to restart before a playback error can occur.
function handleLinuxFirstInstall() {
  if (process.platform !== "linux") return;
  const marker = path.join(app.getPath("userData"), ".cdm-installed");
  if (fs.existsSync(marker)) return;
  fs.writeFileSync(marker, "");
  if (!win) return;
  const choice = dialog.showMessageBoxSync(win, {
    type: "info",
    buttons: ["Restart now", "Later"],
    title: "Restart required",
    message:
      "DRM components were installed for the first time. A restart is required before protected video can play.",
  });
  if (choice === 0) {
    app.relaunch();
    app.exit(0);
  }
}

void app.whenReady().then(() => {
  protocol.handle("app", (request) => {
    const { pathname } = new URL(request.url);
    const requested = path.join(DIST_DIR, decodeURIComponent(pathname));
    const isFile =
      requested.startsWith(DIST_DIR) &&
      fs.existsSync(requested) &&
      !fs.statSync(requested).isDirectory();

    if (isFile) {
      return net.fetch(pathToFileURL(requested).toString());
    }
    // A path with no file extension is a route. Serve the shell and let the
    // router resolve it. A missing file (asset or chunk) is a build error.
    // Return 404 for it. Do not hide it with HTML.
    if (!path.extname(pathname)) {
      return net.fetch(pathToFileURL(path.join(DIST_DIR, "index.html")).toString());
    }
    console.error(`app:// 404: ${pathname}`);
    return new Response(`Not found: ${pathname}`, { status: 404 });
  });

  // Create the window now. Start Widevine in the background.
  // Do not wait for components.whenReady() before you create the window.
  createWindow();

  void components
    .whenReady()
    .then(() => {
      console.log("Widevine ready:", components.status());
      handleLinuxFirstInstall();
    })
    .catch((err) => {
      // Show the error to the user. The user cannot see a console message.
      // Without this message, video fails to play and the cause is not clear.
      dialog.showErrorBox("Widevine install failed", `DRM playback will not work.\n\n${err}`);
    });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
