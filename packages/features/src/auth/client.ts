import { convexClient } from "@convex-dev/better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

// Better Auth requests go to same-origin /api/auth/*, which the web app
// proxies to the Convex deployment (see routes/api.auth.$.ts).
export const authClient = createAuthClient({
  plugins: [convexClient()],
});
