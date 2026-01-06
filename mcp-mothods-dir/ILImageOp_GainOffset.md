```json
{
    "name": "ILImageOp_GainOffset",
    "description": "这个是图像增益和偏移的工具。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
    "inputSchema": {
        "title": "ILImageOp_GainOffset",
        "description": "这个是图像增益和偏移的工具。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "gain": {
                "description": "增益值，传入类型为double类型。",
                "type": "number"
            },
            "offset": {
                "description": "偏移值，传入类型为double类型。",
                "type": "number"
            }
        },
        "required": [
            "imageUrl",
            "gain",
            "offset"
        ]
    }
}
```