```json
{
    "name": "image_compare_compare_symmetric",
    "description": "比较输入图像中的两个对称区域，生成差异图和蒙版图。\r\n返回结构是一个序列化的json，其中：\r\nDiffResultImg属性是差异图像URL地址，\r\nMaskResultImg属性是差异蒙版图像URL地址",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "x1": {
                "description": "对称轴，用于定义两个对称区域的对称轴",
                "type": "integer"
            },
            "y1": {
                "description": "对称轴，用于定义两个对称区域的对称轴",
                "type": "integer"
            },
            "x2": {
                "description": "对称轴，用于定义两个对称区域的对称轴",
                "type": "integer"
            },
            "y2": {
                "description": "对称轴，用于定义两个对称区域的对称轴",
                "type": "integer"
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
            "x1",
            "y1",
            "x2",
            "y2",
            "regionClassObjDescriptionJson",
            "imageCompareClassObjDescriptionJson"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```