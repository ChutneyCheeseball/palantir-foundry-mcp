import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";

export interface McpResource {
  name: string;
  uri: string | ResourceTemplate;
  config: {
    title: string;
    description: string;
    mimeType: string;
    annotations?: Record<string, string>;
  };
  readCallback: (uri: any, context?: any) => Promise<any>;
}