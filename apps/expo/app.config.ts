import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Nihongo Ninja",
  slug: "nihongo-ninja",
  scheme: "nihongo-ninja",
  version: "0.1.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  updates: {
    fallbackToCacheTimeout: 0,
  },
  newArchEnabled: true,
  ios: {
    bundleIdentifier: "app.nihongoninja.mobile",
    supportsTablet: true,
  },
  android: {
    package: "app.nihongoninja.mobile",
  },
  experiments: {
    tsconfigPaths: true,
  },
  plugins: ["expo-router"],
});
