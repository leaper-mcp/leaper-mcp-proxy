```json
{
    "name": "ILImageOp_BitAnd",
    "description": "这个是将两个图像逐像素相加的工具。输出一个新图像，两个输入图像的尺寸需相同、类型相同。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\n\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
    "inputSchema": {
        "title": "ILImageOp_BitAnd",
        "description": "这个是将两个图像逐像素相加的工具。输出一个新图像，两个输入图像的尺寸需相同、类型相同。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\n\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
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