import type { McpTool } from "@types";
import { listOntologiesHandler } from "@handlers/ontologies/listOntologiesHandler";

export const listOntologiesTool: McpTool = {
  name: "foundry.ontologies.list",
  title: "List Ontologies",
  description: "Returns all available ontologies.",
  handler: listOntologiesHandler,
};
