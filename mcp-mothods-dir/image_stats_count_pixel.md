```json
{
    "name": "image_stats_count_pixel",
    "description": "Count the pixels in the input image which is below, between or above the given threshold bounds.\r\n 计算输入图像中灰度值在设置范围之下、之内、之上的像素总数。\r\n Returns a JSON string with the following fields:\r\nBelowCount: The count of pixels below the lower bound of threshold range\r\nBetweenCount: The count of pixels in the threshold range\r\nAboveCount: The count of pixels above the upper bound of threshold range\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nBelowCount: 灰度值在阈值范围以下的像素总数\r\nBetweenCount: 灰度值在阈值范围之间的像素总数\r\nAboveCount: 灰度值在阈值范围以上的像素总数\r\n",
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
            },
            "lb": {
                "description": "阈值范围下限，对于 8 位图像数值在 0 ~ 255 范围内，对于 16 位图像数值在 0 ~ 65535 范围内",
                "type": "integer"
            },
            "ub": {
                "description": "阈值范围上限，对于 8 位图像数值在 0 ~ 255 范围内，对于 16 位图像数值在 0 ~ 65535 范围内",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "regionJson",
            "lb",
            "ub"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```