```json
{
    "name": "image_new",
    "description": "生成一张像素为1*1黑色的图像(单通道灰度图，如果要转换BGR彩色图，需调用灰度转彩色工具进行转换)，如果后续需要修改大小可以调用Image_SetSize方法。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 生成的图像结果 \r\nCreate a new empty image of 1x1 pixel with black pixels (single-channel grayscale). \r\nIf you want to convert to BGR color image, you need to call the grayscale to color conversion tool. \r\nIf you need to modify the size later, you can call the Image_SetSize method. \r\nReturns a serialized JSON string containing the following fields: \r\nResultImg: The generated image result",
    "inputSchema": {
        "type": "object",
        "properties": {}
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```