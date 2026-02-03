```json
{
    "name": "pat_match_prune",
    "description": "Prune the trained template features. 从已训练的模板特征中，剔除某些指定的特征。\r\nEliminate the features which are located outside of the given region or belong to the shape polylines of the given indexes. 输入区域对象外的特征将被删除，不参与匹配。\r\nPass in null region and empty shape indexes to restore the features to original. 传入空区域及 0 过滤阈值，可重置特征为训练后的原始特征。\r\nIt may fail if all the features are removed. 剔除过程可能失败，如所有有效特征均被剔除。\r\n如果别的工具需要剔除某些指定的特征后的模板匹配的功能对象，可以使用当前对象Json。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示模板匹配的功能对象名称，目前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示模板匹配的功能对象的参数文件名称。",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到需要输入的图像",
                "type": "string"
            },
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请创建一个模板匹配的功能对象后传入。\r\n如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "regionClassObjDescriptionJson": {
                "description": "输入的Roi区域，输入Roi区域对象外的特征将被删除，不参与匹配。 \r\n如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "matchClassObjDescriptionJson",
            "regionClassObjDescriptionJson"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```