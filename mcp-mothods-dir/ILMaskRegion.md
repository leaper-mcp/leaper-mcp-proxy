```json
{
    "name": "ILMaskRegion",
    "description": "这个是ILMaskRegion类型(蒙版ROI区域对象)的描述生成工具并返回生成后的ILMaskRegion类型的描述JSON。\r\n其中ILMaskRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
        "title": "ILMaskRegion",
        "description": "这个是ILMaskRegion类型(蒙版ROI区域对象)的描述生成工具并返回生成后的ILMaskRegion类型的描述JSON。\r\n其中ILMaskRegion类型继承于ILRegion类型\r\n",
        "type": "object",
        "properties": {
            "maskImageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入蒙版图像",
                "type": "string"
            },
            "tlx": {
                "description": "蒙版区域的左上角点 x 坐标 (double类型)",
                "type": "number"
            },
            "tly": {
                "description": "蒙版区域的左上角点 y 坐标 (double类型)",
                "type": "number"
            }
        },
        "required": [
            "maskImageUrl",
            "tlx",
            "tly"
        ]
    }
}
```