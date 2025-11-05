```json
{
    "name": "ImageConvert_NormalizeTo8",
    "description": "归一化输入图像到 8 位图\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "title": "ImageConvert_NormalizeTo8",
        "description": "归一化输入图像到 8 位图\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "minValue": {
                "description": "最小值，传入0表示使用图像最小值",
                "type": "number",
                "default": 0
            },
            "maxValue": {
                "description": "最大值，传入0表示使用图像最大值",
                "type": "number",
                "default": 0
            }
        },
        "required": [
            "imageUrl"
        ]
    }
}
```