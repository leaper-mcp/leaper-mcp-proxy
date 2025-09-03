```json
{
    "name": "ILImageOp_ProjectX",
    "description": "这个是水平投影图像的工具。聚合每一行上的像素。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultArray属性是输出的结果向量列表。",
    "inputSchema": {
        "title": "ILImageOp_ProjectX",
        "description": "这个是水平投影图像的工具。聚合每一行上的像素。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultArray属性是输出的结果向量列表。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "aggType": {
                "description": "投影时所使用的聚合方式，传入类型为LPVAggregation类型。有效的类型为：LPVAggAvg（均值：降低图像噪声，在光照条件不佳、亮度不断变化的场景下，获得更稳定的图像质量。）、LPVAggDev（标准差：结果图像中的较亮像素表示在多帧图像中该位置的像素值变化较大。）、LPVAggVar（方差）、LPVAggMin（最小值：减少亮部区域，例如，用于减少过曝区域。）、LPVAggMax（最大值：减少暗部区域，减少阴影。）、LPVAggMajor（主要成分均值）、LPVAggSum（所有值的和）",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "aggType"
        ]
    }
}
```