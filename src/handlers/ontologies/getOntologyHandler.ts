import { getOntology } from "@services/ontologies/getOntology";
import type { McpToolResult } from "@types";
import { formatAsJsonBlock } from "@utils";

export async function getOntologyHandler(args: { ontology: string }): Promise<McpToolResult> {
  try {
    const result = await getOntology(args.ontology);
    const response = { ontology: result };
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
          text: `Failed to get ontology: ${err?.message ?? String(err)}`,
        },
      ],
    };
  }
}
