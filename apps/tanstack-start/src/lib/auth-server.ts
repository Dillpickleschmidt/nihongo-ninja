import { convexBetterAuthReactStart } from "@convex-dev/better-auth/react-start";

const convexUrl = process.env.VITE_CONVEX_URL;
const convexSiteUrl = process.env.VITE_CONVEX_SITE_URL;
if (!convexUrl || !convexSiteUrl) {
  throw new Error("VITE_CONVEX_URL and VITE_CONVEX_SITE_URL must be set in the root .env.");
}

// getToken: Convex JWT for the current session cookie.
// handler: proxies /api/auth/* to the Convex deployment.
// fetchAuthMutation: run a Convex mutation as the signed-in user on the server.
export const { getToken, handler, fetchAuthMutation } = convexBetterAuthReactStart({
  convexUrl,
  convexSiteUrl,
});
