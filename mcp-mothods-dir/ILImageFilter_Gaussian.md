```json
{
    "name": "ILImageFilter_Gaussian",
    "description": "高斯滤波工具。\r\nApply a Gaussian filter to the input image.\r\nGaussian filter is a smoothing filter that reduces noise while preserving edges.\r\n用户没有指定滤波相关参数时，不要调用设置参数的插件，传入的ILImageFilter 类的文件中已经设置了滤波相关的默认参数。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageFilter_Gaussian",
        "description": "高斯滤波工具。\r\nApply a Gaussian filter to the input image.\r\nGaussian filter is a smoothing filter that reduces noise while preserving edges.\r\n用户没有指定滤波相关参数时，不要调用设置参数的插件，传入的ILImageFilter 类的文件中已经设置了滤波相关的默认参数。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
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
    }
}
```