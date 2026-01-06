```json
{
    "name": "ImageConvert_Depth8To16",
    "description": "转换 8 位图像到 16 位图像\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "title": "ImageConvert_Depth8To16",
        "description": "转换 8 位图像到 16 位图像\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "fromNthBit": {
                "description": "指定设置的开始索引，取值范围为 -7 ~ 15",
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