import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function connectToServer() {
  try {
    const mcp = new Client({ name: "mcp-client-cli", version: "1.0.0" });
    const transport = new StdioClientTransport({
      command:"node",
      args: ["dist/index.js"],
    });
    await mcp.connect(transport);

    const toolsResult = await mcp.listTools();
    const tools = toolsResult.tools.map((tool) => {
      return {
        name: tool.name,
        description: tool.description,
        input_schema: tool.inputSchema,
      };
    });
    console.log(
      "Connected to server with tools:",
      tools.map(({ name }) => name)
    );
  } catch (e) {
    console.log("Failed to connect to MCP server: ", e);
    throw e;
  }
}

connectToServer();