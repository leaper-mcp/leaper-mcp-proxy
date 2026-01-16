```json
{
    "name": "ImageStatsCountPixelColor",
    "description": "Count the pixels in the input image which is between or outside the given color bounds.\r\nFor all of the channels, the pixel value is within the color bounds, then it's a \"between\" color pixel.\r\nOtherwise, for any of the channel, the pixel value is smaller or greater than the lower/upper bound, then it's a \"outside\" color pixel.\r\n计算输入彩色图像中像素值在设置范围之内、之外的像素总数。\r\n对于每一个像素，若其所有通道的颜色值均在指定范围内，则该像素为范围内\"between\"像素。\r\n反之，若其任一通道的数值小于或大于指定颜色范围的下限或上限，则该像素为范围外\"outside\"像素。\r\nReturns a JSON string with the following fields:\r\nBetweenCount: The count of pixels within the bounds\r\nOutsideCount: The count of pixels out of the bounds\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nBetweenCount: 颜色值在颜色范围之间的像素总数\r\nOutsideCount: 颜色值在颜色范围以外的像素总数",
    "inputSchema": {
        "title": "ImageStatsCountPixelColor",
        "description": "Count the pixels in the input image which is between or outside the given color bounds.\r\nFor all of the channels, the pixel value is within the color bounds, then it's a \"between\" color pixel.\r\nOtherwise, for any of the channel, the pixel value is smaller or greater than the lower/upper bound, then it's a \"outside\" color pixel.\r\n计算输入彩色图像中像素值在设置范围之内、之外的像素总数。\r\n对于每一个像素，若其所有通道的颜色值均在指定范围内，则该像素为范围内\"between\"像素。\r\n反之，若其任一通道的数值小于或大于指定颜色范围的下限或上限，则该像素为范围外\"outside\"像素。\r\nReturns a JSON string with the following fields:\r\nBetweenCount: The count of pixels within the bounds\r\nOutsideCount: The count of pixels out of the bounds\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nBetweenCount: 颜色值在颜色范围之间的像素总数\r\nOutsideCount: 颜色值在颜色范围以外的像素总数",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "regionJson": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "lbBlue": {
                "description": "颜色范围下限，所有通道的数值需均小于或等于上限，蓝色通道值，范围0-255",
                "type": "integer"
            },
            "lbGreen": {
                "description": "颜色范围下限，所有通道的数值需均小于或等于上限，绿色通道值，范围0-255",
                "type": "integer"
            },
            "lbRed": {
                "description": "颜色范围下限，所有通道的数值需均小于或等于上限，红色通道值，范围0-255",
                "type": "integer"
            },
            "ubBlue": {
                "description": "颜色范围上限，所有通道的数值需均大于或等于上限，蓝色通道值，范围0-255",
                "type": "integer"
            },
            "ubGreen": {
                "description": "颜色范围上限，所有通道的数值需均大于或等于上限，绿色通道值，范围0-255",
                "type": "integer"
            },
            "ubRed": {
                "description": "颜色范围上限，所有通道的数值需均大于或等于上限，红色通道值，范围0-255",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "regionJson",
            "lbBlue",
            "lbGreen",
            "lbRed",
            "ubBlue",
            "ubGreen",
            "ubRed"
        ]
    }
}
```