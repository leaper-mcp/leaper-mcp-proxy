import  { ServerType, startStdioServer }  from 'mcp-proxy';


const mcpProxyUrl = process.env.MCP_PROXY_URL || "https://mcp.leaper.ai/sse";
export default async function main() {
  const server = await startStdioServer({
    serverType: ServerType.SSE,
    url: mcpProxyUrl,
  });
  console.log(`MCP_PROXY_URL: ${mcpProxyUrl}`)
  return server
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});