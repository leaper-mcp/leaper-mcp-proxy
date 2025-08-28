import * as mcpMethods from '../leaper-mcp-methods.json'
import * as fs from 'fs'
import * as path from 'path'

const baseDir = path.join(path.dirname(__dirname), 'mcp-mothods-dir')
fs.mkdirSync(baseDir, { recursive: true })
for (let method of mcpMethods.tools) {
    fs.writeFileSync(path.join(baseDir, method.name + '.md'), '```json\r\n' + JSON.stringify(method, null, 4) + '\r\n```')
}