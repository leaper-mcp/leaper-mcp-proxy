```json
{
    "name": "ILHistogram_Build_Draw",
    "description": "Build histogram from input image and region, and draw as image.\r\nDraw the histogram as a data chart onto provide device context, using the index as x axis and the value as y axis.\r\n基于输入图像和区域，生成直方图，并将直方图绘制为图像输出。\r\n工具不需要通过其它工具设置参数，不需要传入ILHistogram的对象。\r\nReturns a serialized JSON with ResultImg property containing the URL of the output histogram image.",
    "inputSchema": {
        "title": "ILHistogram_Build_Draw",
        "description": "Build histogram from input image and region, and draw as image.\r\nDraw the histogram as a data chart onto provide device context, using the index as x axis and the value as y axis.\r\n基于输入图像和区域，生成直方图，并将直方图绘制为图像输出。\r\n工具不需要通过其它工具设置参数，不需要传入ILHistogram的对象。\r\nReturns a serialized JSON with ResultImg property containing the URL of the output histogram image.",
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
            },
            "width": {
                "description": "输出图片的宽度，传入类型为int类型。",
                "type": "integer"
            },
            "height": {
                "description": "输出图片的高度，传入类型为int类型。",
                "type": "integer"
            },
            "drawFlags": {
                "description": "绘制标志，传入类型为int类型。控制绘制内容。有效的类型为：LPVChartDrawAsBar = 1（绘制成柱状图 。）、LPVChartDrawAsLine = 2（绘制成折线图 。）、LPVChartDrawGrid = 4（绘制网格。）、LPVChartDrawIndexLabel = 8（绘制 x 轴的索引标签。）、LPVChartDrawValueLabel = 16（绘制 y 轴的数值标签 。）、LPVChartDrawAsLineDefault = 26（默认折线图：绘制一个折线图，带有坐标系标签，无网格。）、LPVChartDrawAsBarDefault = 25（默认柱状图：绘制一个柱状图，带有坐标系标签，无网格。）、LPVChartDrawDefault = 25（默认值，与 LPVChartDrawAsBarDefault 相同。）、LPVChartDrawAll = 255（绘制完整柱状图。）",
                "type": "integer"
            },
            "xGridStep": {
                "description": "绘制x轴的步长，传入类型为int类型。默认设置为 0，表示按照分数曲线数据自动选择合适的步长。",
                "type": "integer"
            },
            "yGridStep": {
                "description": "绘制y轴的步长，传入类型为int类型。默认设置为 0，表示按照分数曲线数据自动选择合适的步长。",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "regionJson",
            "binCount",
            "lowerBound",
            "upperBound",
            "width",
            "height",
            "drawFlags",
            "xGridStep",
            "yGridStep"
        ]
    }
}
```