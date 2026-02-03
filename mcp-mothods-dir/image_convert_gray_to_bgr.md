```json
{
    "name": "image_convert_gray_to_bgr",
    "description": "Convert a grayscale image to a BGR color image\r\n将灰度图转换为 BGR 彩色图像\r\n- Convert a grayscale image to a BGR color image, all three channels are assigned to the same value\r\n- The output image will be a BGR color image of the same size as the input\r\n- Formula: B = Gray, G = Gray, R = Gray\r\n- 将灰度图转换为 BGR 彩色图像，所有三个通道都被赋予相同的值\r\n- 输出图像将是 BGR 彩色图像，尺寸与输入的彩色图像一致\r\n- 公式：B = Gray, G = Gray, R = Gray\r\n\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
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