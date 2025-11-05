```json
{
    "name": "ImageConvert_BGRToGray",
    "description": "将 BGR 彩色图像转换为灰度图\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "title": "ImageConvert_BGRToGray",
        "description": "将 BGR 彩色图像转换为灰度图\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            }
        },
        "required": [
            "imageUrl"
        ]
    }
}
```