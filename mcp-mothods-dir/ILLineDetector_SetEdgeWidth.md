```json
{
    "name": "ILLineDetector_SetEdgeWidth",
    "description": "设置直线定位工具所使用的直线边缘的宽度，并返回设置完成的直线定位工具的功能调用的对象。\r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示直线定位工具的功能调用的对象名称，目前名称应为：ILLineDetector (直线定位工具的功能相关对象);\r\nInputParameterFile 表示直线定位工具的功能调用的对象的参数文件名称。\r\n",
    "inputSchema": {
        "title": "ILLineDetector_SetEdgeWidth",
        "description": "设置直线定位工具所使用的直线边缘的宽度，并返回设置完成的直线定位工具的功能调用的对象。\r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示直线定位工具的功能调用的对象名称，目前名称应为：ILLineDetector (直线定位工具的功能相关对象);\r\nInputParameterFile 表示直线定位工具的功能调用的对象的参数文件名称。\r\n",
        "type": "object",
        "properties": {
            "edgeWidth": {
                "description": "直线边缘的宽度，传入类型为 int 类型。取值范围为 1 ~ 10。该宽度为整个边缘过度的像素个数。模糊的边缘需要设置更大的边缘宽度以找到一个稳定的结果。通常大多数情况下，可以直接使用预设值(3)。",
                "type": "integer"
            },
            "InputParameterFile": {
                "description": "指定的 ILLineDetector 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILLineDetector 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "edgeWidth",
            "InputParameterFile"
        ]
    }
}
```