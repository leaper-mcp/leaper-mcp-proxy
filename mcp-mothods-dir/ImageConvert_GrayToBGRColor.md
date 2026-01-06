```json
{
    "name": "ImageConvert_GrayToBGRColor",
    "description": "将灰度值转换为 BGR 颜色值\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nBlue: 蓝色通道值\r\nGreen: 绿色通道值\r\nRed: 红色通道值",
    "inputSchema": {
        "title": "ImageConvert_GrayToBGRColor",
        "description": "将灰度值转换为 BGR 颜色值\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nBlue: 蓝色通道值\r\nGreen: 绿色通道值\r\nRed: 红色通道值",
        "type": "object",
        "properties": {
            "grayValue": {
                "description": "灰度值，范围0-255",
                "type": "integer"
            }
        },
        "required": [
            "grayValue"
        ]
    }
}
```