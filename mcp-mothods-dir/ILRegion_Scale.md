```json
{
    "name": "ILRegion_Scale",
    "description": "Scale a region while keeping the center point unchanged. 缩放当前ROI区域，生成一个新的ROI区域对象，保持区域中心点不变。\r\nThe region is scaled by the specified factors in X and Y directions. 区域按X和Y方向的指定比例进行缩放。\r\nNote: Non-uniform scaling is not supported for LCircleRegion or LAnnulusRegion objects. 注意：对于 LCircleRegion 或 LAnnulusRegion 对象，不支持非等比缩放。\r\n并输出一个新的ROI区域对象(ILRegion类型)的描述JSON。\r\n其中输出的ROI区域类型与输入区域相同\r\n",
    "inputSchema": {
        "title": "ILRegion_Scale",
        "description": "Scale a region while keeping the center point unchanged. 缩放当前ROI区域，生成一个新的ROI区域对象，保持区域中心点不变。\r\nThe region is scaled by the specified factors in X and Y directions. 区域按X和Y方向的指定比例进行缩放。\r\nNote: Non-uniform scaling is not supported for LCircleRegion or LAnnulusRegion objects. 注意：对于 LCircleRegion 或 LAnnulusRegion 对象，不支持非等比缩放。\r\n并输出一个新的ROI区域对象(ILRegion类型)的描述JSON。\r\n其中输出的ROI区域类型与输入区域相同\r\n",
        "type": "object",
        "properties": {
            "regionClassObjDescriptionJson": {
                "description": "原始的Roi区域。传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "factorX": {
                "description": "x 方向的缩放比例 (double类型)",
                "type": "number"
            },
            "factorY": {
                "description": "y 方向的缩放比例 (double类型)",
                "type": "number"
            }
        },
        "required": [
            "regionClassObjDescriptionJson",
            "factorX",
            "factorY"
        ]
    }
}
```