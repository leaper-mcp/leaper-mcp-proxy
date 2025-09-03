```json
{
    "name": "ILImageFilter_LinearFilter",
    "description": "这个是线性滤波工具，基于自定义核，对输入图像进行线性滤波。超出深度范围的结果像素值将被截断，例如，对于 8 位图像，截断到 0 ~ 255 的数值范围。 \r\n用户没有指定滤波相关参数时，不要调用设置参数的插件，传入的ILImageFilter 类的文件中已经设置了滤波相关的默认参数。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageFilter_LinearFilter",
        "description": "这个是线性滤波工具，基于自定义核，对输入图像进行线性滤波。超出深度范围的结果像素值将被截断，例如，对于 8 位图像，截断到 0 ~ 255 的数值范围。 \r\n用户没有指定滤波相关参数时，不要调用设置参数的插件，传入的ILImageFilter 类的文件中已经设置了滤波相关的默认参数。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "kWidth": {
                "description": "滤波核的宽度，传入类型为int类型,自定义核的宽度，取值范围为 1 ~ 9999。\r\n",
                "type": "integer"
            },
            "kHeight": {
                "description": "滤波核的高度，传入类型为int类型，自定义核的高度，取值范围为 1 ~ 9999。\r\n",
                "type": "integer"
            },
            "kMat": {
                "description": "滤波核的高度，传入类型为Array<double>类型，自定义核的数据，这是一组浮点数值 。\r\n",
                "type": "array",
                "items": {
                    "type": "number"
                }
            },
            "InputParameterFile": {
                "description": "指定的 ILImageFilter 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageFilter 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "kWidth",
            "kHeight",
            "kMat",
            "InputParameterFile"
        ]
    }
}
```