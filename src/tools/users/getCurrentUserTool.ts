import { getCurrentUserHandler } from "@handlers/users/getCurrentUserHandler";
import type { McpTool } from "@types";

export const getCurrentUserTool: McpTool = {
  name: "foundry.users.getCurrentUser",
  title: "Get Current Foundry User",
  description: "Returns the authenticated Foundry user's profile.",
  handler: getCurrentUserHandler,
};
