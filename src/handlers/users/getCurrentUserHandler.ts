import { getCurrentUser } from "@services/users/getCurrentUser";
import { formatAsJsonBlock } from "@utils";
import type { McpToolResult } from "@types";

export async function getCurrentUserHandler(): Promise<McpToolResult> {
  try {
    const user = await getCurrentUser();
    return {
      structuredContent: { user },
      content: [{ type: "text", text: formatAsJsonBlock({ user }) }],
    };
  } catch (err: any) {
    return {
      isError: true,
      content: [
        { type: "text", text: `Failed to get current user: ${err?.message ?? String(err)}` },
      ],
    };
  }
}
