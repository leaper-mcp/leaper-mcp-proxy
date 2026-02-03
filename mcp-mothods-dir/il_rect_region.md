```json
{
    "name": "il_rect_region",
    "description": "Create a rectangle region object. 创建一个矩形ROI区域对象。\r\nRectangular region is a simple rectangular area with the given top-left corner (x, y) and size (width, height). 矩形区域是一个简单的矩形区域，由给定的左上角位置 (x, y) 和尺寸 (width, height) 定义。\r\nThis region is axis-aligned with the image coordinate system. 该区域与图像坐标系对齐。\r\n并返回生成后的ILRectRegion类型的描述JSON。\r\n其中ILRectRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
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
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```