import { z } from "zod";
import type { McpTool } from "@types";
import { getOntologyHandler } from "@handlers/ontologies/getOntologyHandler";

export const getOntologyTool: McpTool = {
  name: "foundry.ontologies.get",
  title: "Get Ontology",
  description: "Retrieve an Ontology by API name or RID.",
  inputSchema: {
    ontology: z.string().describe("The API name or RID of the Ontology to retrieve."),
  },
  handler: getOntologyHandler,
};
