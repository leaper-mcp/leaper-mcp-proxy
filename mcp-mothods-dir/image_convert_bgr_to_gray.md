```json
{
    "name": "image_convert_bgr_to_gray",
    "description": "Convert a BGR color image to grayscale\r\n将 BGR 彩色图像转换为灰度图\r\n- Convert a BGR color image to grayscale using the formula: Gray = 0.114⋅B + 0.587⋅G + 0.299⋅R\r\n- The input image must be a BGR color image\r\n- The output image will be a grayscale image of the same size as the input\r\n- 使用公式 Gray = 0.114⋅B + 0.587⋅G + 0.299⋅R 将 BGR 彩色图像转换为灰度图\r\n- 输入图像必须是 BGR 彩色图像\r\n- 输出图像将是灰度图像，尺寸与输入的彩色图像一致\r\n\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
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