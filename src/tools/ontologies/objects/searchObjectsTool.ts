import { z } from "zod";
import type { McpTool } from "@types";
import { searchObjectsHandler } from "@handlers/ontologies/objects/searchObjectsHandler";

export const searchObjectsTool: McpTool = {
  name: "foundry.ontologies.objects.search",
  title: "Search Objects",
  description: "Search ontology objects using Foundry's JSON query language.",
  inputSchema: {
    ontology: z.string().describe("The API name or RID of the ontology containing the objects."),
    objectType: z.string().describe("The API name of the object type to search."),
    where: z
      .record(z.any())
      .optional()
      .describe(
        "A filter expression in Foundry's JSON query language. " +
          "Supports logical operators (and, or, not) and comparisons (eq, in, gt, lt, etc.). " +
          'Example: {"eq": {"age": 21}}. ' +
          "See: https://www.palantir.com/docs/foundry/api/v2/ontologies-v2-resources/ontology-objects/search-objects/"
      ),
    orderBy: z
      .object({
        orderType: z.enum(["fields", "relevance"]).optional(),
        fields: z
          .array(
            z.object({
              field: z.string().describe("Property API name to order by."),
              direction: z.enum(["asc", "desc"]).optional(),
            })
          )
          .describe("List of fields and directions to order by."),
      })
      .optional()
      .describe(
        "Ordering specification for the search results. " +
          "Use orderType=fields with fields[]. Example: " +
          '{ "orderType": "fields", "fields": [ { "field": "lastName", "direction": "asc" } ] }'
      ),
    pageSize: z.number().optional().describe("The maximum number of objects to return."),
    pageToken: z.string().optional().describe("A token to retrieve the next page of results."),
    select: z
      .array(z.string())
      .describe(
        "List of property API names to include in the response. " +
          "The primary key is always included. By default, all properties are returned except vectors, but the SDK requires explicit selection."
      ),
    excludeRid: z.boolean().optional().describe("Whether to exclude the RID from results."),
    snapshot: z.boolean().optional().describe("If true, returns results from a snapshot."),
    artifactRepository: z.string().optional().describe("Optional artifact repository RID."),
    packageName: z.string().optional().describe("Optional package name."),
  },
  handler: searchObjectsHandler,
};
