```json
{
    "name": "ImageCompareNew",
    "description": "提供了像素级的图像比较功能，创建一个图像比较功能调用的对象。\r\n 是所有图像比较工具下的MCP工具的初始化工具，在这些工具调用之前，都需要保证前处理调用过有且仅有一次此初始化工具。返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示图像比较功能调用的对象名称，目前名称应为：ILImageCompare (图像比较功能调用的对象);\r\nInputParameterFile 表示图像比较功能调用的对象的参数文件名称。\r\n",
    "inputSchema": {
        "title": "ImageCompareNew",
        "description": "提供了像素级的图像比较功能，创建一个图像比较功能调用的对象。\r\n 是所有图像比较工具下的MCP工具的初始化工具，在这些工具调用之前，都需要保证前处理调用过有且仅有一次此初始化工具。返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示图像比较功能调用的对象名称，目前名称应为：ILImageCompare (图像比较功能调用的对象);\r\nInputParameterFile 表示图像比较功能调用的对象的参数文件名称。\r\n",
        "type": "object",
        "properties": {}
    }
}
```