import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as fs from "fs";
import { McpSseReader } from 'read-mcp-sse';

const mcpProxySseUrl = process.env.MCP_PROXY_URL || "https://mcp.leaper.ai/sse";

export default function main() {
  const server = new McpServer({
    name: "Leaper Vision Toolkit",
    version: "1.0.0",
  });

  const methodsRes = JSON.parse(fs.readFileSync("./leaper-mcp-methods.json").toString());
  for(const  methods of methodsRes.tools) {
    const properties = {}
    for(const propertieName of Object.keys(methods.inputSchema.properties)) {
      const propertie = methods.inputSchema.properties[propertieName];
      if(propertie.type==='integer') {
        propertie.type="number";
      }
      properties[propertieName] = z[propertie.type]().describe(propertie.description)
    }
    server.tool(methods.name, methods.description, properties ,async (params) => {
      try {
        // 每次调用重开会话
        const mcpSseReader = new McpSseReader(mcpProxySseUrl);
        mcpSseReader.timeout = 30000;
        const res =  await mcpSseReader.callMethod(methods.name, params);
        mcpSseReader.close();
        return res;
      } catch (error) {
        console.error(error);
        return {
          content: [{ type: "text", text: error.message }],
        };
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