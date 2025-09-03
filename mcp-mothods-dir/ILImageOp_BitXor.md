```json
{
    "name": "ILImageOp_BitXor",
    "description": "这个是将两个图像逐像素进行位操作异或的工具。输出一个新图像。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageOp_BitXor",
        "description": "这个是将两个图像逐像素进行位操作异或的工具。输出一个新图像。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
        "type": "object",
        "properties": {
            "imageUrl1": {
                "description": "图片的url地址，通过这个地址获取到图片1",
                "type": "string"
            },
            "imageUrl2": {
                "description": "图片的url地址，通过这个地址获取到图片2",
                "type": "string"
            }
        },
        "required": [
            "imageUrl1",
            "imageUrl2"
        ]
    }
}
```