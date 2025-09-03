```json
{
    "name": "DisplayBlobAnalysis",
    "description": "这个是针对斑点的图像的交互工具，并返回标记斑点后的图片。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是标记输入图像斑点标记后的图片URL地址\r\n",
    "inputSchema": {
        "title": "DisplayBlobAnalysis",
        "description": "这个是针对斑点的图像的交互工具，并返回标记斑点后的图片。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是标记输入图像斑点标记后的图片URL地址\r\n",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "blobAnalysisClassObjDescriptionJson": {
                "description": "传入一个序列化的JSON字符串,使ILBlobAnalysis类型的描述JSON\r\n属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从MCP工具[斑点分析工具]返回的数据的返回值中获取。\r\nLpvClassName 表示要调用的Region接口名称，这里理论上只能是 ILBlobAnalysis (用于创建斑点分析工具的实例)\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。\r\n",
                "type": "string"
            },
            "regionClassObjDescriptionJson": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "blobAnalysisClassObjDescriptionJson",
            "regionClassObjDescriptionJson"
        ]
    }
}
```