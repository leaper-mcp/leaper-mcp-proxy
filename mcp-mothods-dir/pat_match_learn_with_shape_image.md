```json
{
    "name": "pat_match_learn_with_shape_image",
    "description": "Learn the pattern template features from the provided image. 训练模板，使用输入的图像。\r\nThe template center can be modified later. 模板中心可根据需求修改。\r\nThe shape and polarity of the template features are extracted from the shape image. 特征点通过给定的形状图像提取提取模板的形状和极性。\r\nThe feature points are extracted from the given shape image, thus not affected by DetailLevel. 特征点通过给定的形状图像提取，不受 DetailLevel 参数的影响。\r\nThe shape image should have the same size as the input image. 形状图像的尺寸需与输入图像相同。\r\n如果别的工具需要训练后的模板匹配的功能对象，可以使用当前对象Json。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示模板匹配的功能对象名称，目前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示模板匹配的功能对象的参数文件名称。",
    "inputSchema": {
        "type": "object",
        "properties": {
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请创建一个模板匹配的功能对象后传入。\r\n如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到需要输入的图像。需提醒用户先设置 GrayValueWeight 并不启用任何灰度特征权重。可为空，但当其为空时，请直接传入 \"null\"。 ",
                "type": "string"
            },
            "regionClassObjDescriptionJson": {
                "description": "输入的Roi区域，用于限定模板在输入图像中的位置，并用于剔除形状中超出区域的部分。如果用户没有指定该Roi区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "shapeImgUrl": {
                "description": "图片的url地址，通过这个地址获取到需要输入的形状图像。该图像的尺寸需与 imageUrl图像的参数相同,如果用户不认可结果，可以提醒用户尺寸问题。 ",
                "type": "string"
            }
        },
        "required": [
            "matchClassObjDescriptionJson",
            "imageUrl",
            "regionClassObjDescriptionJson",
            "shapeImgUrl"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```