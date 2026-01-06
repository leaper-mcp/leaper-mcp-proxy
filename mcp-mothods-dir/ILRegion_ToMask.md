```json
{
    "name": "ILRegion_ToMask",
    "description": "Generate a mask image from a region. 为当前ROI区域生成一个蒙版图像，以指定的位置和尺寸。\r\nWhite pixels in the mask image represent areas within the region. 图像中的白像素表示该位置包含在当前区域中。\r\nIf position and size are not specified (x, y, w, h all 0), the mask is generated based on the region's bounding box. 若指定的位置和尺寸均为空，即 x, y, w 和 h 均为 0，则蒙版图像基于区域的包围盒位置生成。\r\n并输出生成的蒙版图像(ILImage类型)的描述JSON。\r\n",
    "inputSchema": {
        "title": "ILRegion_ToMask",
        "description": "Generate a mask image from a region. 为当前ROI区域生成一个蒙版图像，以指定的位置和尺寸。\r\nWhite pixels in the mask image represent areas within the region. 图像中的白像素表示该位置包含在当前区域中。\r\nIf position and size are not specified (x, y, w, h all 0), the mask is generated based on the region's bounding box. 若指定的位置和尺寸均为空，即 x, y, w 和 h 均为 0，则蒙版图像基于区域的包围盒位置生成。\r\n并输出生成的蒙版图像(ILImage类型)的描述JSON。\r\n",
        "type": "object",
        "properties": {
            "regionClassObjDescriptionJson": {
                "description": "原始的Roi区域。传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "x": {
                "description": "指定输出蒙版图像的左上角 x 坐标 (int类型)",
                "type": "integer"
            },
            "y": {
                "description": "指定输出蒙版图像的左上角 y 坐标 (int类型)",
                "type": "integer"
            },
            "w": {
                "description": "指定输出蒙版图像的宽度 (int类型)",
                "type": "integer"
            },
            "h": {
                "description": "指定输出蒙版图像的高度 (int类型)",
                "type": "integer"
            }
        },
        "required": [
            "regionClassObjDescriptionJson",
            "x",
            "y",
            "w",
            "h"
        ]
    }
}
```