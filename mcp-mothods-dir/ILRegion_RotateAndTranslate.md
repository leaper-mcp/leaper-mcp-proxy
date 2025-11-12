```json
{
    "name": "ILRegion_RotateAndTranslate",
    "description": "基于锚点的位置和角度变化，生成一个旋转和平移后的ROI区域对象。\r\n区域对象和锚点的相对位置，在变换前后保持不变。 \r\n并输出一个新的ROI区域对象(ILRegion类型)的描述JSON。\r\n其中输出的ROI区域类型与输入区域相同\r\n",
    "inputSchema": {
        "title": "ILRegion_RotateAndTranslate",
        "description": "基于锚点的位置和角度变化，生成一个旋转和平移后的ROI区域对象。\r\n区域对象和锚点的相对位置，在变换前后保持不变。 \r\n并输出一个新的ROI区域对象(ILRegion类型)的描述JSON。\r\n其中输出的ROI区域类型与输入区域相同\r\n",
        "type": "object",
        "properties": {
            "regionClassObjDescriptionJson": {
                "description": "原始的Roi区域。传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "x": {
                "description": "锚点的当前 x 坐标 (double类型)",
                "type": "number"
            },
            "y": {
                "description": "锚点的当前 y 坐标 (double类型)",
                "type": "number"
            },
            "newX": {
                "description": "锚点旋转和平移后的 x 坐标 (double类型)",
                "type": "number"
            },
            "newY": {
                "description": "锚点旋转和平移后的 y 坐标 (double类型)",
                "type": "number"
            },
            "da": {
                "description": "锚点的旋转角度 (double类型)",
                "type": "number"
            }
        },
        "required": [
            "regionClassObjDescriptionJson",
            "x",
            "y",
            "newX",
            "newY",
            "da"
        ]
    }
}
```