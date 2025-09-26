import type { McpToolResult } from "@types";
import { formatAsJsonBlock } from "@utils";
import { listObjects } from "@services/ontologies/objects/listObjects";

export async function listObjectsHandler(args: {
  ontology: string;
  objectType: string;
  pageSize?: number;
  pageToken?: string;
  select: string[];
  orderBy?: string;
}): Promise<McpToolResult> {
  try {
    const result = await listObjects(args.ontology, args.objectType, {
      pageSize: args.pageSize,
      pageToken: args.pageToken,
      select: args.select,
      orderBy: args.orderBy,
    });

    const response = { objects: result };
    return {
      structuredContent: response,
      content: [{ type: "text", text: formatAsJsonBlock(response) }],
    };
  } catch (err: any) {
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Failed to list objects: ${err?.message ?? String(err)}`,
        },
      ],
    };
  }
}
