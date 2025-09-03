```json
{
    "name": "ILImageThreshold_SetThreshold",
    "description": "这个是 设置前景像素的固定阈值范围 工具。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;",
    "inputSchema": {
        "title": "ILImageThreshold_SetThreshold",
        "description": "这个是 设置前景像素的固定阈值范围 工具。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;",
        "type": "object",
        "properties": {
            "lb": {
                "description": "阈值范围下限",
                "type": "integer"
            },
            "ub": {
                "description": "阈值范围上限",
                "type": "integer"
            },
            "InputParameterFile": {
                "description": "指定的 ILImageThreshold 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageThreshold 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "lb",
            "ub",
            "InputParameterFile"
        ]
    }
}
```