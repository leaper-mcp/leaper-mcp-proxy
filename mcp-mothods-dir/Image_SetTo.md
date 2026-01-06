```json
{
    "name": "Image_SetTo",
    "description": "将图像中给定区域内的像素设置为指定的灰度值。 \r\n灰度值取值范围0-255，越低则越黑，越高则越白，0则为黑色，255是白色。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 设置灰度后的图像结果 \r\nSet the pixels in the given region of the image to the specified grayscale value. \r\nGray value range is 0-255, lower values are darker, higher values are lighter, \r\n0 is black, 255 is white. \r\nReturns a serialized JSON string containing the following fields: \r\nResultImg: The image result after setting grayscale",
    "inputSchema": {
        "title": "Image_SetTo",
        "description": "将图像中给定区域内的像素设置为指定的灰度值。 \r\n灰度值取值范围0-255，越低则越黑，越高则越白，0则为黑色，255是白色。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 设置灰度后的图像结果 \r\nSet the pixels in the given region of the image to the specified grayscale value. \r\nGray value range is 0-255, lower values are darker, higher values are lighter, \r\n0 is black, 255 is white. \r\nReturns a serialized JSON string containing the following fields: \r\nResultImg: The image result after setting grayscale",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "当前图像的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "grayValue": {
                "description": "灰度值,取值范围0-255，越低则越黑，越高则越白，0则为黑色，255是白色",
                "type": "integer"
            },
            "regionJson": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "grayValue",
            "regionJson"
        ]
    }
}
```