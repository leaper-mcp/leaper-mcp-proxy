```json
{
    "name": "image_stats_max",
    "description": "Find the pixel of maximum value in the input image, report the value and pixel's position.\r\nIf there's more than one pixel with the same value, report the left-top one.\r\n查找输入图像中的最大灰度值像素，输出该灰度值和像素的位置。\r\n若存在多个像素拥有同一灰度值，输出最左上的像素。\r\nReturns a JSON string with the following fields:\r\nValue: The maximum value\r\nPosX: The x-coordinate of the pixel's position with maximum value\r\nPosY: The y-coordinate of the pixel's position with maximum value\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nValue: 最大灰度值\r\nPosX: 最大灰度值所在像素的x坐标\r\nPosY: 最大灰度值所在像素的y坐标",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "regionJson": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "regionJson"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```