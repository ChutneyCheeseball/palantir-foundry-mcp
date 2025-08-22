import type { McpToolResult } from "@types";
import { formatAsJsonBlock } from "@utils";
import { getObjectType } from "@services/ontologies/objectTypes/getObjectType";

export async function getObjectTypeHandler(args: {
  ontology: string;
  objectType: string;
  branch?: string;
}): Promise<McpToolResult> {
  try {
    const result = await getObjectType(args.ontology, args.objectType, args.branch);
    const response = { objectType: result };
    return {
      structuredContent: response,
      content: [{ type: "text", text: formatAsJsonBlock(response) }],
    };
  } catch (err: any) {
    return {
      isError: true,
      content: [
        { type: "text", text: `Failed to get object type: ${err?.message ?? String(err)}` },
      ],
    };
  }
}
