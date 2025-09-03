```json
{
    "name": "ILImageThreshold_SetThresholdAdaptLocal",
    "description": "这个是 设置并使用局部自适应阈值 工具。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;",
    "inputSchema": {
        "title": "ILImageThreshold_SetThresholdAdaptLocal",
        "description": "这个是 设置并使用局部自适应阈值 工具。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;",
        "type": "object",
        "properties": {
            "blockWidth": {
                "description": "局部区域的宽度，需要是一个奇数",
                "type": "integer"
            },
            "blockHeight": {
                "description": "局部区域的高度，需要是一个奇数",
                "type": "integer"
            },
            "lbBias": {
                "description": "基于局部自适应阈值的下限修正值",
                "type": "integer"
            },
            "ubBias": {
                "description": "基于局部自适应阈值的上限修正值",
                "type": "integer"
            },
            "InputParameterFile": {
                "description": "指定的 ILImageThreshold 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageThreshold 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "blockWidth",
            "blockHeight",
            "lbBias",
            "ubBias",
            "InputParameterFile"
        ]
    }
}
```