```json
{
    "name": "image_set_size",
    "description": "设置图像为指定尺寸。如果设置尺寸比原尺寸更大，像素的数值则会为随机，可调用 SetTo() 或 SetToColor() 接口将其全部设置为 0 或其他数值。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 设置尺寸后的图像结果 \r\nSet the image to the specified size. \r\nIf the set size is larger than the original size, the pixel values will be random, \r\nyou can call SetTo() or SetToColor() interface to set them all to 0 or other values. \r\nReturns a serialized JSON string containing the following fields: \r\nResultImg: The image result after setting the size",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "当前图像的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "width": {
                "description": "输入图像宽度",
                "type": "integer"
            },
            "height": {
                "description": "输入图像高度",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "width",
            "height"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```