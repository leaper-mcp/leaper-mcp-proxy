```json
{
    "name": "il_image_filter_equalize",
    "description": "均衡化工具。该工具将归一化亮度，增加图像对比度。\r\nEqualizes the histogram of the input grayscale image. It will normalizes the brightness and increases the contrast of the image.\r\nThis operation is not a linear filter, thus does not use the kernel size.\r\n用户没有指定滤波相关参数时，不要调用设置参数的插件，传入的ILImageFilter 类的文件中已经设置了滤波相关的默认参数。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "InputParameterFile": {
                "description": "指定的 ILImageFilter 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageFilter 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "InputParameterFile"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```