```json
{
    "name": "ILRectRegion",
    "description": "这个是ILRectRegion类型(矩形ROI区域对象)的描述生成工具并返回生成后的ILRectRegion类型的描述JSON。\r\n其中ILRectRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILRectRegion",
        "description": "这个是ILRectRegion类型(矩形ROI区域对象)的描述生成工具并返回生成后的ILRectRegion类型的描述JSON。\r\n其中ILRectRegion类型继承于ILRegion类型\r\n",
        "type": "object",
        "properties": {
            "TopLeftX": {
                "description": "矩形区域左上角顶点的 x 坐标，即左边界 (double类型)",
                "type": "number"
            },
            "TopLeftY": {
                "description": "矩形区域左上角顶点的 y 坐标，即上边界 (double类型)",
                "type": "number"
            },
            "Width": {
                "description": "矩形区域的宽度 (double类型)",
                "type": "number"
            },
            "Height": {
                "description": "矩形区域的高度  (double类型)",
                "type": "number"
            }
        },
        "required": [
            "TopLeftX",
            "TopLeftY",
            "Width",
            "Height"
        ]
    }
}
```