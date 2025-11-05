```json
{
    "name": "ImageConvert_Depth16To8",
    "description": "转换 16 位图像到 8 位图像\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "title": "ImageConvert_Depth16To8",
        "description": "转换 16 位图像到 8 位图像\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "fromNthBit": {
                "description": "指定提取的开始索引，取值范围为 -7 ~ 15",
                "type": "integer",
                "default": 0
            }
        },
        "required": [
            "imageUrl"
        ]
    }
}
```