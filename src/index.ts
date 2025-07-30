import  { ServerType, startStdioServer }  from 'mcp-proxy';

async function main() {
  await startStdioServer({
    serverType: ServerType.SSE,
    url: "https://renzhihao.top:8882/sse",
    // url: "http://47.82.120.53/sse",
    // url: "https://mcp.leaper.ai/sse",
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});