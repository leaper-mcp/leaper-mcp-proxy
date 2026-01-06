```json
{
    "name": "ILPolyRegion",
    "description": "Create a polygon region object. 创建一个多边形ROI区域对象。\r\nPolygon region is defined by a set of vertices that form a closed polygon. 多边形区域由一组顶点定义，形成一个闭合多边形。\r\nThe region covers the area inside the polygon boundary. 该区域覆盖多边形边界内的区域。\r\n并返回生成后的ILPolyRegion类型的描述JSON。\r\n其中ILPolyRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILPolyRegion",
        "description": "Create a polygon region object. 创建一个多边形ROI区域对象。\r\nPolygon region is defined by a set of vertices that form a closed polygon. 多边形区域由一组顶点定义，形成一个闭合多边形。\r\nThe region covers the area inside the polygon boundary. 该区域覆盖多边形边界内的区域。\r\n并返回生成后的ILPolyRegion类型的描述JSON。\r\n其中ILPolyRegion类型继承于ILRegion类型\r\n",
        "type": "object",
        "properties": {
            "xs": {
                "description": "多边形区域顶点 x 坐标数组 (Array<double>类型)",
                "type": "array",
                "items": {
                    "type": "number"
                }
            },
            "ys": {
                "description": "多边形区域顶点 y 坐标数组 (Array<double>类型)",
                "type": "array",
                "items": {
                    "type": "number"
                }
            }
        },
        "required": [
            "xs",
            "ys"
        ]
    }
}
```