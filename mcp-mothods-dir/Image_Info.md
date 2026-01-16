```json
{
    "name": "Image_Info",
    "description": "获取输入图像的图片信息。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nBytesPerLine : 每行像素数据的字节数，包含行末用于对齐的字节。  \r\nHeight: 图像的高度，行的总数。  \r\nWidth: 图像的宽度，列的总数。 \r\nImageFormat: 图像类型(LPVImageFormatGrayscale8：该图像为 8 位灰度图。LPVImageFormatColor24 ：该图像为 24 位 BGR 彩色图，每个通道 8 位。LPVImageFormatGrayscale16:该图像为 16 位灰度图  ) \r\nGet the input image info.\r\nReturns a serialized JSON string containing the following fields: \r\nBytesPerLine : The number of bytes contained in a row, include the padding bytes.  \r\nHeight: The height of the image, number of rows.  \r\nWidth: The width of the image, number of columns.  \r\nImageFormat: The format of the image. (LPVImageFormatGrayscale8：The image is stored using an 8-bit grayscale format. LPVImageFormatColor24 ：The image is stored using a 24-bit BGR color format (8-8-8).LPVImageFormatGrayscale16:The image is stored using an 16-bit grayscale format. ) \r\n",
    "inputSchema": {
        "title": "Image_Info",
        "description": "获取输入图像的图片信息。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nBytesPerLine : 每行像素数据的字节数，包含行末用于对齐的字节。  \r\nHeight: 图像的高度，行的总数。  \r\nWidth: 图像的宽度，列的总数。 \r\nImageFormat: 图像类型(LPVImageFormatGrayscale8：该图像为 8 位灰度图。LPVImageFormatColor24 ：该图像为 24 位 BGR 彩色图，每个通道 8 位。LPVImageFormatGrayscale16:该图像为 16 位灰度图  ) \r\nGet the input image info.\r\nReturns a serialized JSON string containing the following fields: \r\nBytesPerLine : The number of bytes contained in a row, include the padding bytes.  \r\nHeight: The height of the image, number of rows.  \r\nWidth: The width of the image, number of columns.  \r\nImageFormat: The format of the image. (LPVImageFormatGrayscale8：The image is stored using an 8-bit grayscale format. LPVImageFormatColor24 ：The image is stored using a 24-bit BGR color format (8-8-8).LPVImageFormatGrayscale16:The image is stored using an 16-bit grayscale format. ) \r\n",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "当前图像的url地址，通过这个地址获取到输入图像",
                "type": "string"
            }
        },
        "required": [
            "imageUrl"
        ]
    }
}
```