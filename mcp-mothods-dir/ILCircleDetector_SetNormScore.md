```json
{
    "name": "ILCircleDetector_SetNormScore",
    "description": "设置圆定位工具所使用的是否基于区域中的最大梯度值归一化圆分数，并返回设置完成的圆定位工具的功能调用的对象。\r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示圆定位工具的功能调用的对象名称，目前名称应为：ILCircleDetector (圆定位工具的功能相关对象);\r\nInputParameterFile 表示圆定位工具的功能调用的对象的参数文件名称。\r\n",
    "inputSchema": {
        "title": "ILCircleDetector_SetNormScore",
        "description": "设置圆定位工具所使用的是否基于区域中的最大梯度值归一化圆分数，并返回设置完成的圆定位工具的功能调用的对象。\r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示圆定位工具的功能调用的对象名称，目前名称应为：ILCircleDetector (圆定位工具的功能相关对象);\r\nInputParameterFile 表示圆定位工具的功能调用的对象的参数文件名称。\r\n",
        "type": "object",
        "properties": {
            "normScore": {
                "description": "是否基于区域中的最大梯度值归一化圆分数，传入类型为 bool 类型。",
                "type": "boolean"
            },
            "InputParameterFile": {
                "description": "指定的 ILCircleDetector 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILCircleDetector 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "normScore",
            "InputParameterFile"
        ]
    }
}
```