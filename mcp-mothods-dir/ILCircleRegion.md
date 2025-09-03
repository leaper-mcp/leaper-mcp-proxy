```json
{
    "name": "ILCircleRegion",
    "description": "这个是ILCircleRegion类型(圆形ROI区域对象)的描述生成工具并返回生成后的ILCircleRegion类型的描述JSON。\r\n其中ILCircleRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILCircleRegion",
        "description": "这个是ILCircleRegion类型(圆形ROI区域对象)的描述生成工具并返回生成后的ILCircleRegion类型的描述JSON。\r\n其中ILCircleRegion类型继承于ILRegion类型\r\n",
        "type": "object",
        "properties": {
            "cenx": {
                "description": "圆形区域的 x 坐标 (double类型)",
                "type": "number"
            },
            "ceny": {
                "description": "圆形区域的 y 坐标 (double类型)",
                "type": "number"
            },
            "r": {
                "description": "圆形区域的半径 (double类型)",
                "type": "number"
            }
        },
        "required": [
            "cenx",
            "ceny",
            "r"
        ]
    }
}
```