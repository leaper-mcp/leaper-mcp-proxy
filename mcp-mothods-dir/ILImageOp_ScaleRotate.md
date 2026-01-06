```json
{
    "name": "ILImageOp_ScaleRotate",
    "description": "这个是缩放和旋转输入图像的工具。使用用户指定的锚点。若指定的结果图像对象为空图像，则生成和输入图像尺寸相同的图像。否则，将保持结果图像的尺寸，超出图像范围的像素设为背景像素（默认为黑色）。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
    "inputSchema": {
        "title": "ILImageOp_ScaleRotate",
        "description": "这个是缩放和旋转输入图像的工具。使用用户指定的锚点。若指定的结果图像对象为空图像，则生成和输入图像尺寸相同的图像。否则，将保持结果图像的尺寸，超出图像范围的像素设为背景像素（默认为黑色）。\r\n工具不需要通过其它工具设置参数，不需要传入ILImageOp的对象。 \r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。\r\nEnglish: The two input images should have the same size and format.\r\n中文: 两个输入图像需尺寸相同、类型相同。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "angle": {
                "description": "顺时针旋转角度，传入类型为double类型。",
                "type": "number"
            },
            "zoomX": {
                "description": "x 方向的缩放比例，传入类型为double类型。",
                "type": "number"
            },
            "zoomY": {
                "description": "y 方向的缩放比例，传入类型为double类型。",
                "type": "number"
            },
            "pivotImgX": {
                "description": "输入图像上的锚点的 x 坐标。该锚点将作为缩放和旋转的中心，传入类型为double类型。",
                "type": "number"
            },
            "pivotImgY": {
                "description": "输入图像上的锚点的 y 坐标，传入类型为double类型。",
                "type": "number"
            },
            "pivotResultX": {
                "description": "结果图像上的锚点的 x 坐标。该锚点位置上的像素与输入图像锚点位置上的像素为\"同一个\"，传入类型为double类型。",
                "type": "number"
            },
            "pivotResultY": {
                "description": "结果图像上的锚点的 y 坐标，传入类型为double类型。",
                "type": "number"
            },
            "interMethod": {
                "description": "插值方法，传入类型为LPVInterpolationMethod类型。有效的类型为：LPVInterNearest（最近邻插值：速度较快，插值后的图像质量较差 。）、LPVInterLinear（双线性插值。）、LPVInterCubic（三次曲线插值：当放大图像时，推荐使用该插值方法以获得较好图像质量。）、LPVInterArea（区域插值：当缩小图像时，推荐使用该插值方法以获得较好图像质量。）",
                "type": "integer"
            }
        },
        "required": [
            "imageUrl",
            "angle",
            "zoomX",
            "zoomY",
            "pivotImgX",
            "pivotImgY",
            "pivotResultX",
            "pivotResultY",
            "interMethod"
        ]
    }
}
```