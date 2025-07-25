import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";

export const echoResource = {
  name: "echo",
  uri: new ResourceTemplate("echo://{message}/{message2}", { list: undefined }),
  config: {
    title: "Echo Resource",
    description: "Returns the message you send in the URI.",
    mimeType: "text/plain"
  },
  readCallback: async (uri: URL, context: any) => {
    return {
      contents: [
        {
          uri: uri.href,
          text: `Echoed message: ${JSON.stringify(context)}`
        }
      ]
    };
  }
};