// Learn more: https://docs.expo.dev/guides/monorepos/
const path = require("node:path");
const { getDefaultConfig } = require("expo/metro-config");
const { FileStore } = require("metro-cache");
const { withNativewind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.cacheStores = [
  new FileStore({
    root: path.join(__dirname, "node_modules", ".cache", "metro"),
  }),
];

// Metro watches the whole monorepo. Keep build output out of its file map, or
// it collides on nested node_modules inside those dirs (for example the web
// app's .output/server/node_modules).
config.resolver.blockList = [
  /\/apps\/tanstack-start\/\.output\/.*/,
  /\/apps\/tanstack-start\/dist-electron\/.*/,
  /\/apps\/tanstack-start\/\.nitro\/.*/,
];

/** @type {import('expo/metro-config').MetroConfig} */
module.exports = withNativewind(config);
