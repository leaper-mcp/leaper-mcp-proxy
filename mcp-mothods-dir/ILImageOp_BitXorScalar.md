```json
{
    "name": "ILImageOp_BitXorScalar",
    "description": "这个是将输入图像和一个标量逐像素进行位操作异或的工具。输出一个新图像。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageOp_BitXorScalar",
        "description": "这个是将输入图像和一个标量逐像素进行位操作异或的工具。输出一个新图像。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "scalar": {
                "description": "输入的标量，传入类型为double类型。",
                "type": "number"
            },
            "scalar2": {
                "description": "用于为彩色图像指定第二个通道使用的标量值，传入类型为double类型，若 scalar2 和 scalar3 都设置为 0（默认值），则对所有通道均使用 scalar 数值。",
                "type": "number"
            },
            "scalar3": {
                "description": "用于为彩色图像指定第三个通道使用的标量值，传入类型为double类型。",
                "type": "number"
            }
        },
        "required": [
            "imageUrl",
            "scalar",
            "scalar2",
            "scalar3"
        ]
    }
}
```