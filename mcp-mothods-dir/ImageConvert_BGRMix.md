```json
{
    "name": "ImageConvert_BGRMix",
    "description": "根据指定的各通道权重，混合 BGR 彩色图像的三个通道\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "title": "ImageConvert_BGRMix",
        "description": "根据指定的各通道权重，混合 BGR 彩色图像的三个通道\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "w0": {
                "description": "蓝色通道的权重，取值范围为 -255 ~ 255",
                "type": "number"
            },
            "w1": {
                "description": "绿色通道的权重，取值范围为 -255 ~ 255",
                "type": "number"
            },
            "w2": {
                "description": "红色通道的权重，取值范围为 -255 ~ 255",
                "type": "number"
            }
        },
        "required": [
            "imageUrl",
            "w0",
            "w1",
            "w2"
        ]
    }
}
```