```json
{
    "name": "il_circle_detector",
    "description": "这个是个圆定位相关的初始化工具，初始化创建一个圆定位工具的功能调用的对象。\r\n 是所有圆定位工具下的MCP工具的初始化工具，在这些工具调用之前，都需要保证前处理调用过有且仅有一次此初始化工具。返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示圆定位工具的功能调用的对象名称，目前名称应为：ILCircleDetector (圆定位工具的功能调用的对象)。\r\nInputParameterFile 表示 ILCircleDetector 类初始化文件名称。\r\n",
    "inputSchema": {
        "type": "object",
        "properties": {}
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```