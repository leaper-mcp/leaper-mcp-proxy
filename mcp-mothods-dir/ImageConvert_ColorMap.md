```json
{
    "name": "ImageConvert_ColorMap",
    "description": "对输入图像应用颜色映射表，生成伪彩图\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "title": "ImageConvert_ColorMap",
        "description": "对输入图像应用颜色映射表，生成伪彩图\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "colorMapType": {
                "description": "颜色映射表类型，例如：LPVColorMap.Jet",
                "type": "string"
            },
            "inverse": {
                "description": "是否反向映射",
                "type": "boolean",
                "default": false
            },
            "normalize": {
                "description": "是否归一化",
                "type": "boolean",
                "default": false
            },
            "minValue": {
                "description": "最小值",
                "type": "number",
                "default": 0
            },
            "maxValue": {
                "description": "最大值",
                "type": "number",
                "default": 0
            }
        },
        "required": [
            "imageUrl",
            "colorMapType"
        ]
    }
}
```