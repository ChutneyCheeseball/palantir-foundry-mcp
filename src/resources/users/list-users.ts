import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { listUsers } from "../../handlers/users";
import { formatAsJsonBlock } from "../../utils";
import { McpResource } from "../../types";

export const listUsersResource: McpResource = {
    name: "list-users",
    uri: new ResourceTemplate("users://list/{pageSize}/{pageToken}", { list: undefined }),
    config: {
        title: "List Foundry Users",
        description: "Fetch a paginated list of Foundry users.",
        mimeType: "application/json",
        annotations: {
            params: "Optional: pageSize (number), pageToken (string)",
            pageSize: "Number of users to return per page, defaults to 10.",
            pageToken: "Token for pagination, used to fetch the next page of results."
        }
    },
    readCallback: async (uri: URL, context: any) => {
        const pageSize = context.pageSize ? parseInt(context.pageSize) : 10;
        const pageToken = context.pageToken || undefined;
        const response = await listUsers(pageSize, pageToken);
        return {
            contents: [
                {
                    uri: uri.href,
                    text: formatAsJsonBlock(response)
                }
            ]
        };
    }
};