```json
{
    "name": "image_compare_set_baseline",
    "description": "Set the comparison baseline image (and mask).\r\n* @param[in] img The input image\r\n* @param[in] region The input region, to limit the region of the baseline template on the input image\r\n* and also exclude some not-care pixels.\r\n设置比较的基准图像（和蒙版）\r\n* @param[in] img 输入的图像\r\n* @param[in] region 输入的区域，用于限定基准图像在输入图像中的位置，和剔除无关像素\r\n设置比较的基准图像（和蒙版），并返回设置完成的图像比较功能调用的对象。\r\n如果别的图像比较功能要依赖于当前图像比较功能调用对象来调用，可以使用当前对象Json。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。LpvClassName 表示图像比较功能调用的对象名称，目前名称应为：ILImageCompare (图像比较功能相关对象);\r\nInputParameterFile 表示图像比较功能调用的对象的参数文件名称。",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "regionClassObjDescriptionJson": {
                "description": "原始的Roi区域。在调用此工具前要保证前处理中一定要有且仅有一次的 Region 初始化工具调用，可用的初始化工具有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象)。传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的.droi参数文件名称。",
                "type": "string"
            },
            "imageCompareClassObjDescriptionJson": {
                "description": "用于图像比较功能调用的对象。在调用此工具前要保证前处理中一定要有且仅有一次的 ImageCompareNew 初始化工具调用。如果用户指定图像比较功能相关对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示图像比较功能调用的对象名称，目前名称应为：ILImageCompare (图像比较功能相关对象);\r\nInputParameterFile 表示调用工具函数需要传入的.lcmp参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "regionClassObjDescriptionJson",
            "imageCompareClassObjDescriptionJson"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```