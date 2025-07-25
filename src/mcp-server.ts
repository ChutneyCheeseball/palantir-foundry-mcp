import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { currentUserResource } from "./resources/users/current-user";
import { userByIdResource } from "./resources/users/user-by-id";
import { listUsersResource } from "./resources/users/list-users";
import { echoResource } from "./resources/test-resource";

// Create an MCP server
const server = new McpServer({
  name: "mcp-foundry-palantir-server",
  version: "1.0.0"
});

const userResources = [
  //currentUserResource,
  //userByIdResource,
  //listUsersResource
  echoResource
];

for (const resource of userResources) {
  if (typeof resource.uri === "string") {
    server.registerResource(
      resource.name,
      resource.uri, // string
      resource.config,
      resource.readCallback
    );
  } else {
    server.registerResource(
      resource.name,
      resource.uri, // ResourceTemplate
      resource.config,
      resource.readCallback
    );
  }
}


// Connect to STDIO
const transport = new StdioServerTransport();
server.connect(transport);

// // Add a dynamic greeting resource
// server.registerResource(
//   "greeting",
//   new ResourceTemplate("greeting://{name}", { list: undefined }),
//   { 
//     title: "Greeting Resource",
//     description: "Returns a greeting for a given name"
//   },
//   async (uri: any, context: any) => ({
//     contents: [{
//       uri: uri.href,
//       text: `Hello, ${context.parameters.name}!`
//     }]
//   })
// );

// // Static resource
// server.registerResource(
//   "config",
//   "config://app",
//   {
//     title: "Application Config",
//     description: "Application configuration data",
//     mimeType: "text/plain"
//   },
//   async (uri: any) => ({
//     contents: [{
//       uri: uri.href,
//       text: "App configuration here"
//     }]
//   })
// );

// server.registerTool("listFoundryUsers",
//   {
//     title: "List Foundry Users",
//     description: "Fetches a list of users from the Palantir Foundry environment. pageSize defaults to 10.",
//     inputSchema: { pageSize: z.number().optional(), pageToken: z.string().optional() }
//   },
//   async ({ pageSize, pageToken}) => {
//     const users = await listUsers(pageSize, pageToken);

//     return {
//       content: [{
//         type: "text",
//         text: JSON.stringify(users, null, 2)
//       }]
//     };
//   }
// );

// server.registerTool("searchFoundryUsers",
//   {
//     title: "Search Foundry Users",
//     description: "Perform a case-insensitive prefix search on a single query string for Foundry users based on username, given name and family name.",
//     inputSchema: { query: z.string(), pageSize: z.number().optional(), pageToken: z.string().optional() }
//   },
//   async ({ query, pageSize, pageToken}) => {
//     const users = await searchUsers(query, pageSize, pageToken);

//     return {
//       content: [{
//         type: "text",
//         text: JSON.stringify(users, null, 2)
//       }]
//     };
//   }
// );