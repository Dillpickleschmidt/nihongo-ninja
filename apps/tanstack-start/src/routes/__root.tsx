/// <reference types="vite/client" />

import type { ConvexQueryClient } from "@convex-dev/react-query";
import { AmbientBackground } from "@nn/features/ambient-background";
import { PreferencesProvider } from "@nn/features/preferences";
import type { Theme } from "@nn/ui";
import { ThemeProvider, themeInitScript } from "@nn/ui";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import type * as React from "react";
import { StyleSheet } from "react-native-web";

import { fetchAuth } from "~/lib/auth";

import appCss from "~/styles.css?url";

const getThemeCookie = createServerFn({ method: "GET" }).handler((): Theme => {
  const value = getCookie("theme");
  return value === "light" || value === "dark" ? value : "system";
});

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  convexQueryClient: ConvexQueryClient;
}>()({
  beforeLoad: async ({ context }) => {
    const { session, token, userId } = await fetchAuth();
    // Authenticate SSR Convex queries in route loaders. The client instead
    // gets its token from ConvexBetterAuthProvider.
    if (token) context.convexQueryClient.serverHttpClient?.setAuth(token);
    return { session, userId };
  },
  loader: () => getThemeCookie(),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nihongo Ninja" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  const theme = Route.useLoaderData();
  return (
    <RootDocument theme={theme}>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ theme, children }: { theme: Theme; children: React.ReactNode }) {
  // Inline react-native-web's runtime stylesheet (the flex/text resets behind
  // the css-view/css-text classes) into the server HTML. Without it, layout is
  // wrong until hydration injects it. The client runtime finds this element by
  // id and adopts it instead of making its own.
  const rnwSheet = StyleSheet.getSheet();
  return (
    <html lang="en" className={theme === "dark" ? "dark" : undefined} suppressHydrationWarning>
      <head>
        <HeadContent />
        <style
          id={rnwSheet.id}
          dangerouslySetInnerHTML={{ __html: rnwSheet.textContent }}
          suppressHydrationWarning
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-background font-outfit text-foreground antialiased">
        <ThemeProvider initialTheme={theme}>
          <PreferencesProvider>
            <AmbientBackground />
            {children}
          </PreferencesProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
