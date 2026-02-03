```json
{
    "name": "il_circle_region",
    "description": "Create a circle region object. 创建一个圆形ROI区域对象。\r\nCircle region is a circular area defined by a center point and radius. 圆形区域是由中心点和半径定义的圆形区域。\r\nThis region covers the area inside the circle boundary. 该区域覆盖圆形边界内的区域。\r\n并返回生成后的ILCircleRegion类型的描述JSON。\r\n其中ILCircleRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
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
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```