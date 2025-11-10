```json
{
    "name": "Image_CopyFrom",
    "description": "复制输入图像的内容并覆盖当前图像的指定位置 。\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 复制输入图像的内容并覆盖当前图像的结果\r\n",
    "inputSchema": {
        "title": "Image_CopyFrom",
        "description": "复制输入图像的内容并覆盖当前图像的指定位置 。\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 复制输入图像的内容并覆盖当前图像的结果\r\n",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "当前图像的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "inputImageUrl": {
                "description": "输入图像的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "regionJson": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "panX": {
                "description": "x 方向的平移量",
                "type": "integer"
            },
            "panY": {
                "description": "y 方向的平移量",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "inputImageUrl",
            "regionJson",
            "panX",
            "panY"
        ]
    }
}
```