```json
{
    "name": "il_line_detector_set_accept_score",
    "description": "设置直线定位工具所使用的检测的分数阈值，并返回设置完成的直线定位工具的功能调用的对象。\r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示直线定位工具的功能调用的对象名称，目前名称应为：ILLineDetector (直线定位工具的功能相关对象);\r\nInputParameterFile 表示直线定位工具的功能调用的对象的参数文件名称。\r\n",
    "inputSchema": {
        "type": "object",
        "properties": {
            "acceptScore": {
                "description": "检测的分数阈值，传入类型为 int 类型。用于删选所有边缘结果中高于该阈值的直线。可根据分数图表选择合适的阈值。",
                "type": "integer"
            },
            "InputParameterFile": {
                "description": "指定的 ILLineDetector 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILLineDetector 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "acceptScore",
            "InputParameterFile"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```