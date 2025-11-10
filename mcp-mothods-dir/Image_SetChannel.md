```json
{
    "name": "Image_SetChannel",
    "description": "设置彩色图像中某一个给定索引的通道图像。仅用于彩色图像。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 设置通道后的图像结果 \r\n",
    "inputSchema": {
        "title": "Image_SetChannel",
        "description": "设置彩色图像中某一个给定索引的通道图像。仅用于彩色图像。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 设置通道后的图像结果 \r\n",
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
    }
}
```