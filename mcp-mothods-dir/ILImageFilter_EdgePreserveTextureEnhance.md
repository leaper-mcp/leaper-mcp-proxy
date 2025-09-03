```json
{
    "name": "ILImageFilter_EdgePreserveTextureEnhance",
    "description": "这个是增强图像纹理并保留边缘工具。\r\n用户没有指定滤波相关参数时，必须设置默认参数：平滑度0.01，加速算法运行的系数4。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageFilter_EdgePreserveTextureEnhance",
        "description": "这个是增强图像纹理并保留边缘工具。\r\n用户没有指定滤波相关参数时，必须设置默认参数：平滑度0.01，加速算法运行的系数4。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "speedupFactor": {
                "description": "加速算法运行的系数，传入类型为int类型，用于加速算法运行的系数，推荐使用核尺寸的因数",
                "type": "integer"
            },
            "InputParameterFile": {
                "description": "指定的 ILImageFilter 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageFilter 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            },
            "refImageUrl": {
                "description": "边缘信息图片的url地址，通过这个地址获取到图片，如果用户没有指定图像，请直接传入 \"null\" 。用于为增强过程提供需要保留边缘的大致位置和强度。该图像尺寸需与输入图像相同。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "speedupFactor",
            "InputParameterFile",
            "refImageUrl"
        ]
    }
}
```