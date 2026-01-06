```json
{
    "name": "ILRegion_Subtract",
    "description": "Subtract one region from another. 从当前ROI区域中减去输入的ROI区域。\r\nThe new region contains the parts of the original region that are not in the other region. 新的区域包含原始区域中不在另一个区域中的部分。\r\nIf a non-empty region is subtracted by an empty region, a copy of the original region is returned. 一个非空区域减去空区域，获得该区域对象的拷贝。\r\nIf an empty region is subtracted by a non-empty region, the complement of the other region is returned. 一个空区域减去一个非空区域，获得后者的取反区域。\r\n并输出一个新的复合ROI区域对象(ILCompoundRegion类型)的描述JSON。\r\n其中ILCompoundRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILRegion_Subtract",
        "description": "Subtract one region from another. 从当前ROI区域中减去输入的ROI区域。\r\nThe new region contains the parts of the original region that are not in the other region. 新的区域包含原始区域中不在另一个区域中的部分。\r\nIf a non-empty region is subtracted by an empty region, a copy of the original region is returned. 一个非空区域减去空区域，获得该区域对象的拷贝。\r\nIf an empty region is subtracted by a non-empty region, the complement of the other region is returned. 一个空区域减去一个非空区域，获得后者的取反区域。\r\n并输出一个新的复合ROI区域对象(ILCompoundRegion类型)的描述JSON。\r\n其中ILCompoundRegion类型继承于ILRegion类型\r\n",
        "type": "object",
        "properties": {
            "regionClassObjDescriptionJson": {
                "description": "原始的Roi区域。传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "otherRegionClassObjDescriptionJson": {
                "description": "输入用于减去的ROI区域。传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "regionClassObjDescriptionJson",
            "otherRegionClassObjDescriptionJson"
        ]
    }
}
```