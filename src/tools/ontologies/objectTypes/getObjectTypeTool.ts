import type { McpTool } from "@types";
import { z } from "zod";
import { getObjectTypeHandler } from "@handlers/ontologies/objectTypes/getObjectTypeHandler";

export const getObjectTypeTool: McpTool = {
  name: "foundry.ontologies.objectTypes.get",
  title: "Get Object Type",
  description: "Retrieve an object type from an ontology by API name or RID.",
  inputSchema: {
    ontology: z.string().describe("The API name or RID of the Ontology."),
    objectType: z.string().describe("The API name of the object type."),
    branch: z
      .string()
      .optional()
      .describe(
        "The Foundry branch to load the object type definition from. If not specified, the default branch will be used."
      ),
  },
  handler: getObjectTypeHandler,
};
