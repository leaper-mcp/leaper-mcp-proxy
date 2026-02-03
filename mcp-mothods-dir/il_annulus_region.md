```json
{
    "name": "il_annulus_region",
    "description": "Create an annulus region object. 创建一个圆环ROI区域对象。\r\nAnnulus region is a ring-shaped area defined by an inner and outer circle with the same center. 圆环区域是由共享同一中心的内圆和外圆定义的环形区域。\r\nThe region covers the area between the inner and outer circles. 该区域覆盖内圆和外圆之间的区域。\r\n并返回生成后的ILAnnulusRegion类型的描述JSON。\r\n其中ILAnnulusRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "type": "object",
        "properties": {
            "cenx": {
                "description": "圆环区域中心的 x 坐标 (double类型)",
                "type": "number"
            },
            "ceny": {
                "description": "圆环区域中心的 y 坐标 (double类型)",
                "type": "number"
            },
            "rInner": {
                "description": "圆环区域的内半径 (double类型)",
                "type": "number"
            },
            "rOuter": {
                "description": "圆环区域的外半径 (double类型)",
                "type": "number"
            }
        },
        "required": [
            "cenx",
            "ceny",
            "rInner",
            "rOuter"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```