```json
{
    "name": "ILAnnulusRegion",
    "description": "这个是ILAnnulusRegion类型(圆环ROI区域对象)的描述生成工具并返回生成后的ILAnnulusRegion类型的描述JSON。\r\n其中ILAnnulusRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILAnnulusRegion",
        "description": "这个是ILAnnulusRegion类型(圆环ROI区域对象)的描述生成工具并返回生成后的ILAnnulusRegion类型的描述JSON。\r\n其中ILAnnulusRegion类型继承于ILRegion类型\r\n",
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
    }
}
```