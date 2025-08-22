import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import type { ZodRawShape } from "zod";

export type McpToolResult = {
  structuredContent?: Record<string, unknown>;
  content: { type: "text"; text: string }[];
  isError?: boolean;
  _meta?: Record<string, unknown>;
};

export interface McpTool {
  name: string;
  title: string;
  description: string;
  inputSchema?: ZodRawShape;
  outputSchema?: ZodRawShape;
  handler: (args: any, extra?: unknown) => Promise<McpToolResult>;
}

export function registerTools(server: McpServer, tools: McpTool[]) {
  for (const t of tools) {
    server.registerTool(
      t.name,
      {
        title: t.title,
        description: t.description,
        inputSchema: t.inputSchema,
        outputSchema: t.outputSchema,
      },
      t.handler
    );
  }
}
