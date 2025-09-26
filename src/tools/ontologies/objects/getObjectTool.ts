import { z } from "zod";
import type { McpTool } from "@types";
import { getObjectHandler } from "@handlers/ontologies/objects/getObjectHandler";

export const getObjectTool: McpTool = {
  name: "foundry.ontologies.objects.get",
  title: "Get Object",
  description: "Retrieve a single object from an ontology by its primary key.",
  inputSchema: {
    ontology: z.string().describe("The API name or RID of the Ontology containing the object."),
    objectType: z.string().describe("The API name of the object type containing the object."),
    primaryKey: z.string().describe("The primary key (API name) of the object to retrieve."),
    select: z
      .array(z.string())
      .optional()
      .describe(
        "List of property API names to include in the response. " +
          "By default, all properties are returned except vectors, but the SDK requires an explicit array. " +
          "If omitted, no additional properties are requested beyond the primary key. " +
          "Unknown properties will result in an error. " +
          "Use the 'getObjectType' endpoint or Ontology Manager to discover property names."
      ),
  },
  handler: getObjectHandler,
};
