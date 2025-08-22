import type { McpTool } from "@types";
import { z } from "zod";
import { listObjectTypesHandler } from "@handlers/ontologies/objectTypes/listObjectTypesHandler";

export const listObjectTypesTool: McpTool = {
  name: "foundry.ontologies.objectTypes.list",
  title: "List Object Types",
  description: "Lists object types for an ontology (paginated).",
  inputSchema: {
    ontology: z.string().describe("The API name or RID of the Ontology."),
    branch: z
      .string()
      .optional()
      .describe(
        "The Foundry branch to list the object types from. If not specified, the default branch will be used."
      ),
    pageSize: z.number().optional().describe("The desired size of the page to be returned."),
    pageToken: z
      .string()
      .optional()
      .describe(
        "The page token indicates where to start paging. This should be omitted from the first page's request."
      ),
  },
  handler: listObjectTypesHandler,
};
