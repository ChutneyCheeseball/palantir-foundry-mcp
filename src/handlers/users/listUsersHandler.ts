import { McpToolResult } from "@types";
import { listUsers } from "@services/users/listUsers";
import { formatAsJsonBlock } from "@utils";

export async function listUsersHandler(args: {
  pageSize?: number;
  pageToken?: string;
}): Promise<McpToolResult> {
  try {
    const result = await listUsers(args.pageSize, args.pageToken);
    const response = {
      data: result.data,
      nextPageToken: result.nextPageToken,
    };
    return {
      structuredContent: response,
      content: [{ type: "text", text: formatAsJsonBlock(response) }],
    };
  } catch (err: any) {
    return {
      isError: true,
      content: [{ type: "text", text: `Failed to list users: ${err?.message ?? String(err)}` }],
    };
  }
}
