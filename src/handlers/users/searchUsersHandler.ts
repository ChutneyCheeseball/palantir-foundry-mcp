import { McpToolResult } from "@types";
import { searchUsers } from "@services/users/searchUsers";
import { formatAsJsonBlock } from "@utils";

export async function searchUsersHandler(args: {
  query: string;
  pageSize?: number;
  pageToken?: string;
}): Promise<McpToolResult> {
  try {
    const result = await searchUsers(args.query, args.pageSize, args.pageToken);

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
      content: [{ type: "text", text: `Failed to search users: ${err?.message ?? String(err)}` }],
    };
  }
}
