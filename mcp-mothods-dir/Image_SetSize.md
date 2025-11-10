```json
{
    "name": "Image_SetSize",
    "description": "设置图像为指定尺寸。像素的数值为未定义的，可调用 SetTo() 或 SetToColor() 接口将其全部设置为 0 或其他数值。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 设置尺寸后的图像结果",
    "inputSchema": {
        "title": "Image_SetSize",
        "description": "设置图像为指定尺寸。像素的数值为未定义的，可调用 SetTo() 或 SetToColor() 接口将其全部设置为 0 或其他数值。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 设置尺寸后的图像结果",
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
    }
}
```