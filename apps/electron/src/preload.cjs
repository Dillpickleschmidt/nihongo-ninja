const { contextBridge, ipcRenderer } = require("electron");

// The watch screen uses this to place the Crunchyroll view over its frame.
contextBridge.exposeInMainWorld("nnDesktop", {
  openEmbed: (url, bounds) => {
    ipcRenderer.send("embed:open", url, bounds);
  },
  closeEmbed: () => {
    ipcRenderer.send("embed:close");
  },
});
