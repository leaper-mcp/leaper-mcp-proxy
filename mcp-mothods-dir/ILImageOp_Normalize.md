```json
{
    "name": "ILImageOp_Normalize",
    "description": "这个是归一化输入图像，拉伸指定的最小最大值范围内的像素到目标数值范围的工具。不改变图像位深，归一化后的结果图像与输入位深相同、通道数相同。对于彩色的多通道图像，输出也是彩色多通道图像，每个通道分别独立进行归一化。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nbelowMask属性是入图图像中超出感兴趣数值范围的像素的蒙版地址。白色像素表示这些位置的数值小于 fromMinValue 或者大于 fromMaxValue 。可基于该蒙版，将这些位置的数值设置为统一个黑色或目标的最小最大值，或调用 FillHole() 进行修补。\r\naboveMask属性是入图图像中超出感兴趣数值范围的像素的蒙版地址。白色像素表示这些位置的数值小于 fromMinValue 或者大于 fromMaxValue 。可基于该蒙版，将这些位置的数值设置为统一个黑色或目标的最小最大值，或调用 FillHole() 进行修补。 ",
    "inputSchema": {
        "title": "ILImageOp_Normalize",
        "description": "这个是归一化输入图像，拉伸指定的最小最大值范围内的像素到目标数值范围的工具。不改变图像位深，归一化后的结果图像与输入位深相同、通道数相同。对于彩色的多通道图像，输出也是彩色多通道图像，每个通道分别独立进行归一化。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nbelowMask属性是入图图像中超出感兴趣数值范围的像素的蒙版地址。白色像素表示这些位置的数值小于 fromMinValue 或者大于 fromMaxValue 。可基于该蒙版，将这些位置的数值设置为统一个黑色或目标的最小最大值，或调用 FillHole() 进行修补。\r\naboveMask属性是入图图像中超出感兴趣数值范围的像素的蒙版地址。白色像素表示这些位置的数值小于 fromMinValue 或者大于 fromMaxValue 。可基于该蒙版，将这些位置的数值设置为统一个黑色或目标的最小最大值，或调用 FillHole() 进行修补。 ",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "fromMinValue": {
                "description": "指定感兴趣的数值范围，传入类型为double类型。表示使用当前图像的最小值。",
                "type": "number"
            },
            "fromMaxValue": {
                "description": "指定感兴趣的数值范围，传入类型为double类型。表示使用当前图像的最大值。",
                "type": "number"
            },
            "toMinValue": {
                "description": "指定目标的数值范围，传入类型为double类型。表示使用图像位深的理论数值范围的最小值，对于 8 位图使用 0 ~ 255，对于 16 位图使用 0 ~ 65535 ",
                "type": "number"
            },
            "toMaxValue": {
                "description": "指定目标的数值范围，传入类型为double类型。表示使用图像位深的理论数值范围的最大值，对于 8 位图使用 0 ~ 255，对于 16 位图使用 0 ~ 65535 ",
                "type": "number"
            }
        },
        "required": [
            "imageUrl",
            "fromMinValue",
            "fromMaxValue",
            "toMinValue",
            "toMaxValue"
        ]
    }
}
```