```json
{
    "name": "PatMatchLearn",
    "description": "Learn the pattern template features from the provided image. 训练模板，使用输入的图像。\r\nThe template center can be modified later. 模板中心可根据需求修改。\r\nThis function extracts features from the input image for pattern matching. 该函数从输入图像中提取特征用于模板匹配。\r\nIt may fail if no proper feature is found on the input image. 训练过程可能失败，若在输入图像中没有找到任何可用的特征。\r\n如果别的工具需要训练后的模板匹配的功能对象，可以使用当前对象Json。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示模板匹配的功能对象名称，目前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示模板匹配的功能对象的参数文件名称。",
    "inputSchema": {
        "title": "PatMatchLearn",
        "description": "Learn the pattern template features from the provided image. 训练模板，使用输入的图像。\r\nThe template center can be modified later. 模板中心可根据需求修改。\r\nThis function extracts features from the input image for pattern matching. 该函数从输入图像中提取特征用于模板匹配。\r\nIt may fail if no proper feature is found on the input image. 训练过程可能失败，若在输入图像中没有找到任何可用的特征。\r\n如果别的工具需要训练后的模板匹配的功能对象，可以使用当前对象Json。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示模板匹配的功能对象名称，目前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示模板匹配的功能对象的参数文件名称。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到需要输入的图像",
                "type": "string"
            },
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请创建一个模板匹配的功能对象后传入。如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "regionClassObjDescriptionJson": {
                "description": "输入的Roi区域，用于限定模板在输入图像中的位置。 \r\n如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "matchClassObjDescriptionJson",
            "regionClassObjDescriptionJson"
        ]
    }
}
```