import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { tools } from "./tools";
import { registerTools } from "./types";

// Create an MCP server
const server = new McpServer({
  name: "mcp-foundry-palantir-server",
  version: "1.0.0",
});

registerTools(server, tools);

// Connect to STDIO
const transport = new StdioServerTransport();
server.connect(transport);
