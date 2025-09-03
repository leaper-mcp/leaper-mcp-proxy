```json
{
    "name": "ILImageOp_Invert",
    "description": "这个是反转图像的工具。8 位图：I' = 255 - I，16 位图：I' = 65535 - I。 \r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageOp_Invert",
        "description": "这个是反转图像的工具。8 位图：I' = 255 - I，16 位图：I' = 65535 - I。 \r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            }
        },
        "required": [
            "imageUrl"
        ]
    }
}
```