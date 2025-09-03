```json
{
    "name": "ILImageOp_Split",
    "description": "这个是按网格拆分一个图像的工具。为若干个小图 。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImgList属性是输出结果图像URL地址列表。",
    "inputSchema": {
        "title": "ILImageOp_Split",
        "description": "这个是按网格拆分一个图像的工具。为若干个小图 。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImgList属性是输出结果图像URL地址列表。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "xCount": {
                "description": "指定水平方向的拆分数量，传入类型为int类型。",
                "type": "integer"
            },
            "xStep": {
                "description": "单次拆分的水平方向的步长，传入类型为int类型。对于非循环模式，其通常等于结果图像的宽和高。而对于循环模式，这表示每次拆分所收集的行列数，多次拆分组合为最终结果。",
                "type": "integer"
            },
            "xSpace": {
                "description": "拆分的水平方向的间隔，传入类型为int类型。",
                "type": "integer"
            },
            "yCount": {
                "description": "指定垂直方向的拆分数量，传入类型为int类型。",
                "type": "integer"
            },
            "yStep": {
                "description": "单次拆分的垂直方向的步长，传入类型为int类型。",
                "type": "integer"
            },
            "ySpace": {
                "description": "拆分的垂直方向的间隔，传入类型为int类型。",
                "type": "integer"
            },
            "cyclicMode": {
                "description": "是否启用循环拆分，传入类型为bool类型。默认启用。循环模型将循环重复拆分整张图像，再合并单次拆分的若干列为一张图像，作为最终结果。",
                "type": "boolean"
            },
            "sameSize": {
                "description": "输出的结果图像图像队列，传入类型为bool类型。从上到下。",
                "type": "boolean"
            }
        },
        "required": [
            "imageUrl",
            "xCount",
            "xStep",
            "xSpace",
            "yCount",
            "yStep",
            "ySpace",
            "cyclicMode",
            "sameSize"
        ]
    }
}
```