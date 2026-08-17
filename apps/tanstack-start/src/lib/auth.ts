import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { getToken } from "./auth-server";

const convexSiteUrl = process.env.VITE_CONVEX_SITE_URL;

type BetterAuthSession = {
  user: { id: string; name: string; email: string };
  session: { expiresAt: string };
} | null;

// Session + Convex JWT for SSR, read from the request cookies.
export const fetchAuth = createServerFn({ method: "GET" }).handler(async () => {
  const request = getRequest();
  const response = await fetch(`${convexSiteUrl}/api/auth/get-session`, {
    headers: { cookie: request.headers.get("cookie") ?? "" },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch auth session: ${response.status}`);
  }
  const session = (await response.json()) as BetterAuthSession;
  const token = await getToken();

  return {
    session,
    token: token ?? null,
    userId: session?.user.id ?? null,
  };
});
