```json
{
    "name": "ILImageOp_Log",
    "description": "这个是对输入图像进行逐像素对数运算的工具。输出一个新图像。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
    "inputSchema": {
        "title": "ILImageOp_Log",
        "description": "这个是对输入图像进行逐像素对数运算的工具。输出一个新图像。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "baseValue": {
                "description": "输入的底数，必须为一个正数，传入类型为double类型。",
                "type": "number"
            }
        },
        "required": [
            "imageUrl",
            "baseValue"
        ]
    }
}
```