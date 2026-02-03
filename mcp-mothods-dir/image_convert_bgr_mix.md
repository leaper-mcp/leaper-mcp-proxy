```json
{
    "name": "image_convert_bgr_mix",
    "description": "Mix the 3 channels in the input BGR color image using the specified weight for individual channel\r\n根据指定的各通道权重，混合 BGR 彩色图像的三个通道\r\n- Mix the 3 channels in the input BGR color image using the specified weight for individual channel\r\n- Formula: Gray = w0⋅B + w1⋅G + w2⋅R\r\n- Weight values should be in range -255 ~ 255\r\n- The output image will be a grayscale image of the same size as the input\r\n- 根据指定的各通道权重，混合 BGR 彩色图像的三个通道\r\n- 公式：Gray = w0⋅B + w1⋅G + w2⋅R\r\n- 权重值取值范围在 -255 ~ 255\r\n- 输出图像将是灰度图像，尺寸与输入的彩色图像一致\r\n\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
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
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```