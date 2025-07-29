import  { ServerType, startStdioServer }  from 'mcp-proxy';

async function main() {
  await startStdioServer({
    serverType: ServerType.SSE,
    url: "https://mcp.leaper.ai/sse",
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});