```json
{
    "name": "image_convert_bgr_to_gray_color",
    "description": "将 BGR 颜色值转换为灰度值\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nGrayValue: 转换后的灰度值",
    "inputSchema": {
        "type": "object",
        "properties": {
            "blue": {
                "description": "蓝色通道值，范围0-255",
                "type": "integer"
            },
            "green": {
                "description": "绿色通道值，范围0-255",
                "type": "integer"
            },
            "red": {
                "description": "红色通道值，范围0-255",
                "type": "integer"
            }
        },
        "required": [
            "blue",
            "green",
            "red"
        ]
    }
}
```