```json
{
    "name": "ImageStatsSharpness",
    "description": "Compute the relative sharpness of the input image, based on the edge gradients.\r\nIt's usually used to automate focusing a camera lens on a scene.\r\nNote that the score may be affected by the contrast, brightness and content of the scene, thus it's meaningless to compare the sharpness scores of different scenes.\r\n计算输入图像的相对清晰度，基于图像中总体的边缘强度。\r\n清晰度计算通常用于实现对静态场景的自动对焦。\r\n注意清晰度通常受到图像的对比度、亮度以及场景内容的影响，因此无法比较不同场景的清晰度数值。\r\nReturns a JSON string with the following fields:\r\nSharpness: The sharpness score\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nSharpness: 清晰度评价数值",
    "inputSchema": {
        "title": "ImageStatsSharpness",
        "description": "Compute the relative sharpness of the input image, based on the edge gradients.\r\nIt's usually used to automate focusing a camera lens on a scene.\r\nNote that the score may be affected by the contrast, brightness and content of the scene, thus it's meaningless to compare the sharpness scores of different scenes.\r\n计算输入图像的相对清晰度，基于图像中总体的边缘强度。\r\n清晰度计算通常用于实现对静态场景的自动对焦。\r\n注意清晰度通常受到图像的对比度、亮度以及场景内容的影响，因此无法比较不同场景的清晰度数值。\r\nReturns a JSON string with the following fields:\r\nSharpness: The sharpness score\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nSharpness: 清晰度评价数值",
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
    }
}
```