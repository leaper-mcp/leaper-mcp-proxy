```json
{
    "name": "il_annulus_sector_region",
    "description": "Create an annulus sector region object. 创建一个环状扇形ROI区域对象。\r\nAnnulus sector region is a sector-shaped area within a ring, defined by start and end angles. 环状扇形区域是圆环内的扇形区域，由起始角度和结束角度定义。\r\nThe region covers the area between inner and outer circles within the specified angular range. 该区域覆盖指定角度范围内的内圆和外圆之间的区域。\r\n并返回生成后的ILAnnulusSectorRegion类型的描述JSON。\r\n其中ILAnnulusSectorRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "type": "object",
        "properties": {
            "cenx": {
                "description": "环状扇形区域所在圆中心点的 x 坐标 (double类型)",
                "type": "number"
            },
            "ceny": {
                "description": "环状扇形区域所在圆中心点的 y 坐标 (double类型)",
                "type": "number"
            },
            "rInner": {
                "description": "环状扇形区域的内侧半径 (double类型)",
                "type": "number"
            },
            "rOuter": {
                "description": "环状扇形区域的外侧半径 (double类型)",
                "type": "number"
            },
            "aStart": {
                "description": "环状扇形区域的起始角度 (double类型)",
                "type": "number"
            },
            "aEnd": {
                "description": "环状扇形区域的结束角度 (double类型)",
                "type": "number"
            }
        },
        "required": [
            "cenx",
            "ceny",
            "rInner",
            "rOuter",
            "aStart",
            "aEnd"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```