```json
{
    "name": "PatMatchIsLearnt",
    "description": "检查 当前模板匹配的功能对象 是否已训练。 \r\n布尔值(bool)类型  已训练，返回 true，否则返回 false ",
    "inputSchema": {
        "title": "PatMatchIsLearnt",
        "description": "检查 当前模板匹配的功能对象 是否已训练。 \r\n布尔值(bool)类型  已训练，返回 true，否则返回 false ",
        "type": "object",
        "properties": {
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请创建一个模板匹配的功能对象后传入。\r\n如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。\r\n",
                "type": "string"
            }
        },
        "required": [
            "matchClassObjDescriptionJson"
        ]
    }
}
```