import { getUserByIdHandler } from "@handlers/users/getUserByIdHandler";
import { z } from "zod";
import type { McpTool } from "@types";

export const getUserByIdTool: McpTool = {
  name: "foundry.getUserById",
  title: "Get Foundry User by ID",
  description: "Fetches a Foundry user by their unique ID.",
  inputSchema: { id: z.string() }, // ✅ simple and clean
  handler: getUserByIdHandler,
};
