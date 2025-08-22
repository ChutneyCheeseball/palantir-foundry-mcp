import type { McpToolResult } from "@types";
import { listObjectTypes } from "@services/ontologies/objectTypes/listObjectTypes";
import { formatAsJsonBlock } from "@utils";

export async function listObjectTypesHandler(args: {
  ontology: string;
  pageSize?: number;
  pageToken?: string;
}): Promise<McpToolResult> {
  try {
    const result = await listObjectTypes(args.ontology, args.pageSize, args.pageToken);
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
      content: [
        { type: "text", text: `Failed to list object types: ${err?.message ?? String(err)}` },
      ],
    };
  }
}
