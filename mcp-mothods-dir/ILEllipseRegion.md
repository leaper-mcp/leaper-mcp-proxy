```json
{
    "name": "ILEllipseRegion",
    "description": "这个是ILEllipseRegion类型(椭圆ROI区域对象)的描述生成工具并返回生成后的ILEllipseRegion类型的描述JSON。\r\n其中ILEllipseRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILEllipseRegion",
        "description": "这个是ILEllipseRegion类型(椭圆ROI区域对象)的描述生成工具并返回生成后的ILEllipseRegion类型的描述JSON。\r\n其中ILEllipseRegion类型继承于ILRegion类型\r\n",
        "type": "object",
        "properties": {
            "cenx": {
                "description": "椭圆区域中心点的 x 坐标 (double类型)",
                "type": "number"
            },
            "ceny": {
                "description": "椭圆区域中心点的 y 坐标 (double类型)",
                "type": "number"
            },
            "w": {
                "description": "椭圆区域的宽度 (主轴长度) (double类型)",
                "type": "number"
            },
            "h": {
                "description": "椭圆区域的高度 (短轴长度) (double类型)",
                "type": "number"
            },
            "a": {
                "description": "椭圆区域的旋转角度 (主轴方向) (double类型)",
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