```json
{
    "name": "ImageConvert_BGRToGrayColor",
    "description": "将 BGR 颜色值转换为灰度值\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nGrayValue: 转换后的灰度值",
    "inputSchema": {
        "title": "ImageConvert_BGRToGrayColor",
        "description": "将 BGR 颜色值转换为灰度值\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nGrayValue: 转换后的灰度值",
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