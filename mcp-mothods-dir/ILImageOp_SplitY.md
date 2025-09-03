```json
{
    "name": "ILImageOp_SplitY",
    "description": "这个是垂直拆分一个图像的工具。为若干个小图 。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImgList属性是输出结果图像URL地址列表。",
    "inputSchema": {
        "title": "ILImageOp_SplitY",
        "description": "这个是垂直拆分一个图像的工具。为若干个小图 。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImgList属性是输出结果图像URL地址列表。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "count": {
                "description": "指定拆分数量，传入类型为int类型。",
                "type": "integer"
            },
            "step": {
                "description": "单次拆分的步长，传入类型为int类型。对于非循环模式，其通常等于结果图像的高。而对于循环模式，这表示每次拆分所收集的行数，多次拆分组合为最终结果。",
                "type": "integer"
            },
            "space": {
                "description": "拆分的间隔，传入类型为int类型。",
                "type": "integer"
            },
            "cyclicMode": {
                "description": "是否启用循环拆分，传入类型为bool类型。默认启用。循环模型将循环重复拆分整张图像，再合并单次拆分的若干行为一张图像，作为最终结果。",
                "type": "boolean"
            },
            "sameSize": {
                "description": "输出的结果图像图像队列，传入类型为bool类型。从上到下。",
                "type": "boolean"
            }
        },
        "required": [
            "imageUrl",
            "count",
            "step",
            "space",
            "cyclicMode",
            "sameSize"
        ]
    }
}
```