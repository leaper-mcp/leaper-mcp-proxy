```json
{
    "name": "ILAnnulusSectorRegion",
    "description": "这个是ILAnnulusSectorRegion类型(环状扇形ROI区域对象)的描述生成工具并返回生成后的ILAnnulusSectorRegion类型的描述JSON。\r\n其中ILAnnulusSectorRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILAnnulusSectorRegion",
        "description": "这个是ILAnnulusSectorRegion类型(环状扇形ROI区域对象)的描述生成工具并返回生成后的ILAnnulusSectorRegion类型的描述JSON。\r\n其中ILAnnulusSectorRegion类型继承于ILRegion类型\r\n",
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
    }
}
```