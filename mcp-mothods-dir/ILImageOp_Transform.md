```json
{
    "name": "ILImageOp_Transform",
    "description": "这个是应用指定的变换矩阵到输入图像的工具。得到一个新的图像。若指定的结果图像对象为空图像，则生成和输入图像尺寸相同的图像。否则，将保持结果图像的尺寸，超出图像范围的像素设为背景像素（默认为黑色）。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageOp_Transform",
        "description": "这个是应用指定的变换矩阵到输入图像的工具。得到一个新的图像。若指定的结果图像对象为空图像，则生成和输入图像尺寸相同的图像。否则，将保持结果图像的尺寸，超出图像范围的像素设为背景像素（默认为黑色）。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "tf": {
                "description": "变换矩阵，传入类型为ILTransform类型。",
                "type": "object"
            },
            "interMethod": {
                "description": "插值方法，传入类型为LPVInterpolationMethod类型。",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "tf",
            "interMethod"
        ]
    }
}
```