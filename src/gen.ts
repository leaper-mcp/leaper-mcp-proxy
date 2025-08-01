import { McpSseReader } from 'read-mcp-sse';
import * as fsPromises from 'fs/promises';

const mcpProxySseUrl = process.env.MCP_PROXY_URL || "https://mcp.leaper.ai/sse";
async function writeLeaperMcpJson() {
    const mcpSseReader = new McpSseReader(mcpProxySseUrl);
    mcpSseReader.timeout = 30000;
    const methodsRes = await mcpSseReader.getMethods();
    await fsPromises.writeFile('leaper-mcp-methods.json', JSON.stringify(methodsRes, null, 2));
    mcpSseReader.close();
}

writeLeaperMcpJson().catch((e) => {
    console.error(e);
    process.exit(1);
});