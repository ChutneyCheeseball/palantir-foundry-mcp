import { z } from "zod";
import { listUsersHandler } from "@handlers/users/listUsersHandler";
import { McpTool } from "@types";

export const listUsersTool: McpTool = {
  name: "foundry.users.listUsers",
  title: "List Foundry Users",
  description: "Retrieves a paginated list of Foundry users.",
  inputSchema: {
    pageSize: z.number().optional().describe("Defaults to 10 if not specified"),
    pageToken: z.string().optional().describe("Use to fetch next page of results"),
  },
  handler: listUsersHandler,
};
