import type { McpTool } from "@types";
import { listOntologiesHandler } from "@handlers/ontologies/listOntologiesHandler";

export const listOntologiesTool: McpTool = {
  name: "foundry.ontologies.listOntologies",
  title: "List Ontologies",
  description: "Returns all available ontologies.",
  handler: listOntologiesHandler,
};
