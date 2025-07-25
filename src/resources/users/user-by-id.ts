import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getUserById } from "../../handlers/users";
import { formatAsJsonBlock } from "../../utils";
import { McpResource } from "../../types";

export const userByIdResource: McpResource = {
  name: "user-by-id",
  uri: new ResourceTemplate("user://{id}", { list: undefined }),
  config: {
    title: "Get Foundry User by ID",
    description: "Fetches details for a specific Foundry user by their unique ID.",
    mimeType: "application/json",
  },
  readCallback: async (uri: URL, context: any) => {
    const userId = context.id;
    const user = await getUserById(userId);
    return {
      contents: [
        {
          uri: uri.href,
          text: formatAsJsonBlock(user)
        }
      ]
    };
  }
};