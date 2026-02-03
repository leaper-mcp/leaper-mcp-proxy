```json
{
    "name": "il_mask_region",
    "description": "Create a mask region object. 创建一个蒙版ROI区域对象。\r\nMask region is defined by a binary image mask, where white pixels represent the region area. 蒙版区域由二值图像蒙版定义，其中白色像素表示区域范围。\r\nThe mask image determines the shape and extent of the region. 蒙版图像决定区域的形状和范围。\r\n并返回生成后的ILMaskRegion类型的描述JSON。\r\n其中ILMaskRegion类型继承于ILRegion类型\r\n",
    "inputSchema": {
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
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```