```json
{
    "name": "ILImageMorph_BottomHat",
    "description": "~english Bottom-hat operation tool. Erase small elements and details from given images. Bottom-hat operation is the equivalent of subtracting the input image from the result of performing a morphological closing operation on the input image.\r\nWhen the user does not specify morphological parameters, do not call the parameter setting plugin, as the ILImageMorph class file already has default morphological parameters set.\r\nThe return structure is a serialized JSON string where:\r\nResultImg property is the URL address of the output result image.\r\n\r\n@math_eq_full{I' = close( I, element ) - I}\r\n@math_image_center{bottomhat.png}\r\n~chinese 低帽工具。用于去除图像中的较小单元和细节。该工具等价于从闭操作的结果中减去原输入图像。\r\n用户没有指定形态学相关参数时，不要调用设置参数的插件，传入的 ILImageMorph 类的文件中已经设置了形态学相关的默认参数。\r\n返回结构是一个序列化的JSON字符串，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageMorph_BottomHat",
        "description": "~english Bottom-hat operation tool. Erase small elements and details from given images. Bottom-hat operation is the equivalent of subtracting the input image from the result of performing a morphological closing operation on the input image.\r\nWhen the user does not specify morphological parameters, do not call the parameter setting plugin, as the ILImageMorph class file already has default morphological parameters set.\r\nThe return structure is a serialized JSON string where:\r\nResultImg property is the URL address of the output result image.\r\n\r\n@math_eq_full{I' = close( I, element ) - I}\r\n@math_image_center{bottomhat.png}\r\n~chinese 低帽工具。用于去除图像中的较小单元和细节。该工具等价于从闭操作的结果中减去原输入图像。\r\n用户没有指定形态学相关参数时，不要调用设置参数的插件，传入的 ILImageMorph 类的文件中已经设置了形态学相关的默认参数。\r\n返回结构是一个序列化的JSON字符串，其中：\r\nResultImg属性是输出结果图像URL地址。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "~english The URL address of the image, through which the image is obtained.~chinese 图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "InputParameterFile": {
                "description": "~english The file path of the specified ILImageMorph class, representing the parameter file name required for calling the tool function.Before calling this tool, ensure that the ILImageMorph initialization tool has been called exactly once in the preprocessing.The value of this property needs to be obtained from the InputParameterFile field of the preprocessing MCP tool's return value.~chinese 指定的 ILImageMorph 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageMorph 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "InputParameterFile"
        ]
    }
}
```