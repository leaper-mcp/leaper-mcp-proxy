```json
{
    "name": "image_convert_depth16_to8",
    "description": "Convert a 16bit image to 8bit depth, extracting the continues 8 bits from the specified index\r\n转换 16 位图像到 8 位图像，从指定索引开始提取连续 8 位\r\n- Convert a 16bit image to 8bit depth, extracting the continues 8 bits from the specified index\r\n- From Nth Bit usage: 0 (Extract High 8bit), 8 (Extract Low 8bit), 4 (Extract Middle 8bit)\r\n- fromNthBit range: -7 ~ 15 to ensure at least 1 valid bit\r\n- 转换 16 位图像到 8 位图像，从指定索引开始提取连续 8 位\r\n- 指定索引用途：0 (提取高 8 位), 8 (提取低 8 位), 4 (提取中 8 位)\r\n- fromNthBit 取值范围为 -7 ~ 15 以保证至少 1 位有效位\r\n\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "fromNthBit": {
                "description": "指定提取的开始索引，取值范围为 -7 ~ 15",
                "type": "integer",
                "default": 0
            }
        },
        "required": [
            "imageUrl"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```