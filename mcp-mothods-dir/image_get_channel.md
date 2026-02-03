```json
{
    "name": "image_get_channel",
    "description": "BGR8 从彩色图像中提取某一个给定索引的通道图像。仅用于彩色图像。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 给定索引的通道的图像结果 \r\nExtract the channel of the given index from a color image. This function is only for a color image. \r\nReturns a serialized JSON string containing the following fields: \r\nResultImg: The channel image result of the given index",
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
            }
        },
        "required": [
            "imageUrl",
            "channelIdx"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```