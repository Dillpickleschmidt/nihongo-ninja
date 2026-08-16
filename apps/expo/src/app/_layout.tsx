// Write layouts by hand. The route generator does not create them.

import { ThemeProvider, useTheme } from "@nn/ui";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConvexProvider } from "convex/react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { convexQueryClient, queryClient } from "~/utils/convex";

import "../styles.css";

// Hold the splash until the saved theme is applied, so the first frame is themed.
void SplashScreen.preventAutoHideAsync();

function AppShell() {
  const { hydrated } = useTheme();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (hydrated) void SplashScreen.hideAsync();
  }, [hydrated]);

  // The backdrop paints bg-background behind the transparent screen cards, so
  // navigation transitions never expose an unthemed gap. paddingTop keeps every
  // screen clear of the status bar, since edge-to-edge draws under it.
  return (
    <View className="flex-1 bg-background" style={{ paddingTop: insets.top }}>
      <ConvexProvider client={convexQueryClient.convexClient}>
        <QueryClientProvider client={queryClient}>
          <Stack
            screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "transparent" } }}
          />
          <StatusBar />
        </QueryClientProvider>
      </ConvexProvider>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
