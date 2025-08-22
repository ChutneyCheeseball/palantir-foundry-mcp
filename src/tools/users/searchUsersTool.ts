import { McpTool } from "@types";
import { z } from "zod";
import { searchUsersHandler } from "@handlers/users/searchUsersHandler";

export const searchUsersTool: McpTool = {
  name: "foundry.users.searchUsers",
  title: "Search Users",
  description: "Searches for Foundry users by query string.",
  inputSchema: {
    query: z.string().describe("Query string to search for users"),
    pageSize: z.number().optional().describe("Defaults to 10 if not specified"),
    pageToken: z.string().optional().describe("Use to fetch next page of results"),
  },
  handler: searchUsersHandler,
};
