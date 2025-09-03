```json
{
    "name": "ILPolyRegion",
    "description": "这个是ILPolyRegion类型(多边形ROI区域对象)的描述生成工具并返回生成后的ILPolyRegion类型的描述JSON。\r\n其中ILPolyRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILPolyRegion",
        "description": "这个是ILPolyRegion类型(多边形ROI区域对象)的描述生成工具并返回生成后的ILPolyRegion类型的描述JSON。\r\n其中ILPolyRegion类型继承于ILRegion类型\r\n",
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