import { z } from "zod";
import type { McpTool } from "@types";
import { listObjectsHandler } from "@handlers/ontologies/objects/listObjectsHandler";

export const listObjectsTool: McpTool = {
  name: "foundry.ontologies.objects.list",
  title: "List Objects",
  description: "Retrieve objects of a given object type from an ontology.",
  inputSchema: {
    ontology: z.string().describe("The API name or RID of the Ontology containing the objects."),
    objectType: z.string().describe("The API name of the object type to list objects for."),
    pageSize: z
      .number()
      .optional()
      .describe("The maximum number of objects to return. Defaults to 10."),
    pageToken: z
      .string()
      .optional()
      .describe(
        "A token to retrieve the next page of results. Returned by a previous listObjects call."
      ),
    select: z
      .array(z.string())
      .describe("A list of property API names to select and include in the result."),
    orderBy: z
      .string()
      .optional()
      .describe(
        "Expression specifying the order of results. " +
          "Format: 'properties.<property>:asc|desc'. Multiple properties can be comma-delimited. " +
          "Shorthand 'p' can be used instead of 'properties'. " +
          "Example: 'p.lastName:asc,properties.age:desc'. " +
          "If not specified, ordering is undefined."
      ),
  },
  handler: listObjectsHandler,
};
