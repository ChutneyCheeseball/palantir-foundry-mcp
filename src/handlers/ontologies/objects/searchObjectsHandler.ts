import type { McpToolResult } from "@types";
import { formatAsJsonBlock } from "@utils";
import { searchObjects } from "@services/ontologies/objects/searchObjects";

export async function searchObjectsHandler(args: {
  ontology: string;
  objectType: string;
  where?: any;
  orderBy?: string;
  pageSize?: number;
  pageToken?: string;
  select: string[];
}): Promise<McpToolResult> {
  try {
    const result = await searchObjects(args.ontology, args.objectType, {
      where: args.where,
      orderBy: args.orderBy,
      pageSize: args.pageSize,
      pageToken: args.pageToken,
      select: args.select,
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
          text: `Failed to search objects: ${err?.message ?? String(err)}`,
        },
      ],
    };
  }
}
