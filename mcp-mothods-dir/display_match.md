```json
{
    "name": "display_match",
    "description": "Display the pattern matching results. 这个是执行模板匹配的图像的交互工具，并返回标记斑点后的图片。\r\nThis interface provide functionalities of the display control. 该接口提供显示控件功能。\r\nUsually you add the display control via the Toolbox in Visual Studio. 通常可通过 Visual Studio 的工具箱，将显示控件加入到应用程序窗口中。\r\nThis interface helps you to manage the scene in the display control, for the image, regions, geometric primitives and algorithms' results to shown in the control. 该接口提供管理显示窗口内场景的功能，用于设置场景中的图像，增加删除场景中的 region、几何形状和算法结果等。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是标记输入图像斑点标记后的图片URL地址",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入的图像",
                "type": "string"
            },
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象壳用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请直接传入 \"null\" 。\r\n如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "regionClassObjDescriptionJson": {
                "description": "用于限定模板匹配的Roi区域。如果用户没有指定区域，请提醒用户描述限定模板匹配的Roi区域。 限定模板匹配的Roi区域为一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
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