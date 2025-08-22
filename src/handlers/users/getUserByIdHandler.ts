import { McpToolResult } from "@types";
import { getUserById } from "@services/users/getUserById";
import { formatAsJsonBlock } from "../../utils";

export async function getUserByIdHandler(args: { id: string }): Promise<McpToolResult> {
  try {
    const user = await getUserById(args.id);
    return {
      structuredContent: { user },
      content: [
        {
          type: "text",
          text: formatAsJsonBlock({ user }),
        },
      ],
    };
  } catch (err: any) {
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Failed to get user by ID: ${err?.message ?? String(err)}`,
        },
      ],
    };
  }
}
