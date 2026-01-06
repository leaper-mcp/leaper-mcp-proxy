```json
{
    "name": "ILImageOp_Blend",
    "description": "这个是将多帧图像融合用于将多张同一场景的图像融合为一张的工具。在不同的场景，通过使用不同的聚合方式达到不同目的。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
    "inputSchema": {
        "title": "ILImageOp_Blend",
        "description": "这个是将多帧图像融合用于将多张同一场景的图像融合为一张的工具。在不同的场景，通过使用不同的聚合方式达到不同目的。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
        "type": "object",
        "properties": {
            "imageUrlList": {
                "description": "图片的url地址队列，通过这个地址获取到图片",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "aggType": {
                "description": "融合方式，传入类型为LPVAggregation类型。有效的类型为：LPVAggAvg = 0（均值：降低图像噪声，在光照条件不佳、亮度不断变化的场景下，获得更稳定的图像质量。）、LPVAggDev = 1（标准差：结果图像中的较亮像素表示在多帧图像中该位置的像素值变化较大。）LPVAggMin = 3（最小值：减少亮部区域，例如，用于减少过曝区域。）、LPVAggMax = 4（最大值：减少暗部区域，减少阴影。）",
                "type": "integer"
            }
        },
        "required": [
            "imageUrlList",
            "aggType"
        ]
    }
}
```