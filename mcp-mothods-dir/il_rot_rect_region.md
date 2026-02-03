```json
{
    "name": "il_rot_rect_region",
    "description": "Create a rotated rectangle region object. 创建一个旋转矩形ROI区域对象。\r\nRotated rectangle region is a rectangular area that can be rotated by an arbitrary angle. 旋转矩形区域是一个可以任意角度旋转的矩形区域。\r\nThe region is defined by center coordinates, width, height, and rotation angle. 该区域由中心坐标、宽度、高度和旋转角度定义。\r\n并返回生成后的ILRotRectRegion类型的描述JSON。\r\n其中ILRotRectRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
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
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```