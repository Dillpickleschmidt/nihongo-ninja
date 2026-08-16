import { query } from "./_generated/server";

export const ping = query({
  args: {},
  handler: () => ({
    status: "ok" as const,
    serverTime: Date.now(),
  }),
});
