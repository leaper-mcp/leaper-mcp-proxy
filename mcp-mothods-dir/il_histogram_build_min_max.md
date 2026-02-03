```json
{
    "name": "il_histogram_build_min_max",
    "description": "Build histogram from input image and region, find minimum and maximum values.\r\nFind the bin of minimum or maximum value, report the value and bin index. If there's more than one bin with the same value, report the first one.\r\n基于输入图像和区域，生成直方图，查找直方图上的最大和最小值及其对应的索引。\r\n工具不需要通过其它工具设置参数，不需要传入ILHistogram的对象。 \r\nReturns a serialized JSON with MinIdx, MinValue, MaxIdx, and MaxValue properties.",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "regionJson": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "binCount": {
                "description": "将直方图分为若干个统计区域，传入类型为int类型。推荐设置为总数据范围的因子，比如对一个灰度图，常用设置为 256 ，128，32 等。",
                "type": "integer"
            },
            "lowerBound": {
                "description": "统计数据范围的下限，传入类型为int类型。比如对一个 8 位灰度图，常用设置为 0。",
                "type": "integer"
            },
            "upperBound": {
                "description": "统计数据范围的上限，传入类型为int类型。比如对一个 8 位灰度图，常用设置为 255。",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "regionJson",
            "binCount",
            "lowerBound",
            "upperBound"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```