import { McpToolResult } from "@types";
import { listOntologies } from "@services/ontologies/listOntologies";
import { formatAsJsonBlock } from "@utils";

export async function listOntologiesHandler(): Promise<McpToolResult> {
  try {
    const result = await listOntologies();
    const response = { data: result.data };
    return {
      structuredContent: response,
      content: [{ type: "text", text: formatAsJsonBlock(response) }],
    };
  } catch (err: any) {
    return {
      isError: true,
      content: [
        { type: "text", text: `Failed to list ontologies: ${err?.message ?? String(err)}` },
      ],
    };
  }
}
