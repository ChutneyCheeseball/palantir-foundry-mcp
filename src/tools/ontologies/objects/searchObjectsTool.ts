import { z } from "zod";
import type { McpTool } from "@types";
import { searchObjectsHandler } from "@handlers/ontologies/objects/searchObjectsHandler";

export const searchObjectsTool: McpTool = {
  name: "foundry.ontologies.objects.search",
  title: "Search Objects",
  description: "Search ontology objects using filter expressions.",
  inputSchema: {
    ontology: z.string().describe("The API name or RID of the Ontology containing the objects."),
    objectType: z.string().describe("The API name of the object type to search."),
    where: z
      .record(z.any())
      .optional()
      .describe(
        "A filter expression in Foundry's JSON query language. " +
          "Supports logical operators (and, or, not) and comparisons (eq, in, gt, lt, etc.). " +
          'Example: {"where":{"type":"eq","field":"age","value":21}}. ' +
          "See: https://www.palantir.com/docs/foundry/api/v2/ontologies-v2-resources/ontology-objects/search-objects/"
      ),
    orderBy: z
      .string()
      .optional()
      .describe(
        "Expression specifying the order of results. Format: 'properties.<property>:asc|desc'. " +
          "Multiple properties can be comma-delimited. Example: 'p.lastName:asc,properties.age:desc'."
      ),
    pageSize: z.number().optional().describe("The maximum number of objects to return."),
    pageToken: z.string().optional().describe("A token to retrieve the next page of results."),
    select: z
      .array(z.string())
      .describe(
        "List of property API names to include in the response. " +
          "By default, all properties are returned except vectors, but the SDK requires explicit selection."
      ),
  },
  handler: searchObjectsHandler,
};
