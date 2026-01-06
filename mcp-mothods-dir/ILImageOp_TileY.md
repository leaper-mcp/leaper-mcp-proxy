```json
{
    "name": "ILImageOp_TileY",
    "description": "这个是将垂直平铺一组图像，合成一张大尺寸图像的工具。输出一个新图像。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
    "inputSchema": {
        "title": "ILImageOp_TileY",
        "description": "这个是将垂直平铺一组图像，合成一张大尺寸图像的工具。输出一个新图像。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
        "type": "object",
        "properties": {
            "imageUrlList": {
                "description": "图片的url地址队列，通过这个地址获取到图片",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "columnCount": {
                "description": "每列的图像个数，传入类型为int类型。若队列中的图像总数不被整除，则最后一列的剩余像素将被填充为背景色。传入 0 或负数，用于生成单列的合成图像。",
                "type": "integer"
            },
            "compactMode": {
                "description": "紧凑模式开关，传入类型为bool类型。在紧凑模式下（True），一行中的图像被紧密地连续排布。否则（False），结果图像的尺寸由输入图像中的最大长宽决定，其中较小的图像将被放置在对应行列的中心。",
                "type": "boolean"
            }
        },
        "required": [
            "imageUrlList",
            "columnCount",
            "compactMode"
        ]
    }
}
```