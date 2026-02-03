```json
{
    "name": "il_image_op_flip",
    "description": "这个是水平或垂直翻转一个图像的工具。若指定的结果图像对象为空图像，则生成和输入图像尺寸相同的图像。否则，将保持结果图像的尺寸，超出图像范围的像素设为背景像素（默认为黑色）。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "flipType": {
                "description": "输入的标量，传入类型为LPVFlipType类型。有效的类型为：LPVFlipH = 1（水平翻转。）、LPVFlipV = 2（垂直翻转。）、LPVFlipBoth = 3（水平和垂直翻转。）",
                "type": "string",
                "enum": [
                    "LPVFlipH",
                    "LPVFlipV",
                    "LPVFlipBoth"
                ]
            }
        },
        "required": [
            "imageUrl",
            "flipType"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```