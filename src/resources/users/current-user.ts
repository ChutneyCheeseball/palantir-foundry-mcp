import { getCurrentUser } from "../../handlers/users";
import { McpResource } from "../../types";
import { formatAsJsonBlock } from "../../utils";

export const currentUserResource: McpResource = {
  name: "current-user",
  uri: "user://me",
  config: {
    title: "Get Current Foundry User",
    description: "Returns the authenticated Foundry user's profile.",
    mimeType: "application/json",
  },
  readCallback:
  async (uri: any) => {
    const user = await getCurrentUser();
    return {
      contents: [
        {
          uri: uri.href,
          text: formatAsJsonBlock(user)
        }
      ]
    };
  }
}