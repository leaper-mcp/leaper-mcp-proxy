```json
{
    "name": "ILRotRectRegion",
    "description": "这个是ILRotRectRegion类型(旋转矩形ROI区域对象)的描述生成工具并返回生成后的ILRotRectRegion类型的描述JSON。\r\n其中ILRotRectRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILRotRectRegion",
        "description": "这个是ILRotRectRegion类型(旋转矩形ROI区域对象)的描述生成工具并返回生成后的ILRotRectRegion类型的描述JSON。\r\n其中ILRotRectRegion类型继承于ILRegion类型\r\n",
        "type": "object",
        "properties": {
            "cenx": {
                "description": "旋转矩形区域的中心 x 坐标 (double类型)",
                "type": "number"
            },
            "ceny": {
                "description": "旋转矩形区域的中心 y 坐标 (double类型)",
                "type": "number"
            },
            "w": {
                "description": "旋转矩形区域的宽度 (double类型)",
                "type": "number"
            },
            "h": {
                "description": "旋转矩形区域的高度 (double类型)",
                "type": "number"
            },
            "a": {
                "description": "旋转矩形区域的角度 (double类型)",
                "type": "number"
            }
        },
        "required": [
            "cenx",
            "ceny",
            "w",
            "h",
            "a"
        ]
    }
}
```