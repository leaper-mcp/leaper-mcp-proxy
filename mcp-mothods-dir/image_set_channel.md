```json
{
    "name": "image_set_channel",
    "description": "设置彩色图像中某一个给定索引的通道图像。仅用于彩色图像。 \r\n输入的通道图像应为灰度图，尺寸与当前的彩色图像相同。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 设置通道后的图像结果 \r\nSet the channel of the given index to the input grayscale image. This function is only for a color image. \r\nThe input channel image should be a grayscale image of the same size as the current color image. \r\nReturns a serialized JSON string containing the following fields: \r\nResultImg: The image result after setting the channel",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "当前图像的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "channelIdx": {
                "description": "输入的通道索引，可为 0，1 或 2 ",
                "type": "integer"
            },
            "channelImageUrl": {
                "description": "通道图像的url地址，通过这个地址获取到通道图像",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "channelIdx",
            "channelImageUrl"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```