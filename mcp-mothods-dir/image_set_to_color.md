```json
{
    "name": "image_set_to_color",
    "description": "将图像中给定区域内的像素设置为指定的 RGB 值。仅用于彩色图像。 \r\n蓝色通道值范围0-255，绿色通道值范围0-255，红色通道值范围0-255。 \r\n返回结构是一个序列化的JSON字符串，包含以下字段： \r\nResultImg: 设置颜色后的图像结果 \r\nSet the pixels in the given region of the image to the specified RGB value. \r\nThis function is only for color images. \r\nBlue channel value range 0-255, green channel value range 0-255, red channel value range 0-255. \r\nReturns a serialized JSON string containing the following fields: \r\nResultImg: The image result after setting color",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "当前图像的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "blue": {
                "description": "蓝色通道值，范围0-255",
                "type": "integer"
            },
            "green": {
                "description": "绿色通道值，范围0-255",
                "type": "integer"
            },
            "red": {
                "description": "红色通道值，范围0-255",
                "type": "integer"
            },
            "regionJson": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "blue",
            "green",
            "red",
            "regionJson"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```