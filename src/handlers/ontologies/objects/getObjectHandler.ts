import type { McpToolResult } from "@types";
import { formatAsJsonBlock } from "@utils";
import { getObject } from "@services/ontologies/objects/getObject";

export async function getObjectHandler(args: {
  ontology: string;
  objectType: string;
  primaryKey: string;
  select?: string[];
}): Promise<McpToolResult> {
  try {
    const result = await getObject(args.ontology, args.objectType, args.primaryKey, {
      select: args.select ?? [],
    });

    const response = { object: result };
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
          text: `Failed to get object: ${err?.message ?? String(err)}`,
        },
      ],
    };
  }
}
