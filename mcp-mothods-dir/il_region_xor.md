```json
{
    "name": "il_region_xor",
    "description": "XOR two regions. 将当前ROI区域与输入的区域进行异或操作。\r\nThe new region contains parts that are exclusively in one region but not both. 新的区域仅包含属于当前区域但不属于输入区域或属于输入区域但不属于当前区域的部分。\r\nIf an empty region is XORed with any other region, an empty region is returned. 一个空区域与任何其他区域进行异或操作，获得一个空区域对象。\r\n并输出一个新的复合ROI区域对象(ILCompoundRegion类型)的描述JSON。\r\n其中ILCompoundRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "type": "object",
        "properties": {
            "regionClassObjDescriptionJson": {
                "description": "原始的Roi区域。传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "otherRegionClassObjDescriptionJson": {
                "description": "输入用于异或操作的ROI区域。传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "regionClassObjDescriptionJson",
            "otherRegionClassObjDescriptionJson"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```