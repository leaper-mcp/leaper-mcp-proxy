import  { ServerType, startStdioServer }  from 'mcp-proxy';

export default async function main() {
  const server = await startStdioServer({
    serverType: ServerType.SSE,
    // url: "https://renzhihao.top:8882/sse",
    url: "https://mcp.leaper.ai/sse",
  });
  return server
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});