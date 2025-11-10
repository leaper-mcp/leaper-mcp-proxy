```json
{
    "name": "ILImageOp_Brightness",
    "description": "这个是图片亮度调节工具，可以让图片变亮或者变暗。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageOp_Brightness",
        "description": "这个是图片亮度调节工具，可以让图片变亮或者变暗。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "brightNum": {
                "description": "亮度强度，数值负255到正255，越小越暗，越大越亮，图片亮度不变则为0",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "brightNum"
        ]
    }
}
```