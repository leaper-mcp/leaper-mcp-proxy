import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import * as fs from "fs";

const mcpProxySseUrl = process.env.MCP_PROXY_URL || "https://mcp.leaper.ai/sse";

export default function main() {
  const server = new McpServer({
    name: "Leaper Vision Toolkit",
    version: "1.0.0",
  });
  let cli: Client;
  const methodsRes = JSON.parse(fs.readFileSync("./leaper-mcp-methods.json").toString());
  for(const  methods of methodsRes.tools) {
      server.registerTool(methods.name,methods,async (params) => {
      try {
        cli = new Client({ name: "mcp-proxy-cli", version: "1.0.0" })
        await cli.connect(new SSEClientTransport(new URL(mcpProxySseUrl)))
        return await cli.callTool({
          name: methods.name,
          arguments: params,
        });
      } catch (error) {
        console.error(error);
        return {
          content: [{ type: "text", text: error.message }],
        };
      } finally {
        await cli.close()
      }
    });
  }
  return server.server;
}

// export default function ({ config }: { config: z.infer<typeof configSchema> }) {
//   // Create a new MCP server per MCP spec
//   const server = new McpServer({
//     name: "My MCP Server",
//     version: "1.0.0",
//   });

//   // Add a tool
//   server.tool(
//     "hello",
//     "Say hello to someone",
//     {
//       name: z.string().describe("Name to greet"),
//     },
//     async ({ name }) => {
//       return {
//         content: [{ type: "text", text: `Hello, ${name}!` }],
//       };
//     }
//   );

//   return server.server;
// }