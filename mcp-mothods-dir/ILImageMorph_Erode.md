```json
{
    "name": "ILImageMorph_Erode",
    "description": "这个是腐蚀工具。输出结果中的每个像素为其结构元范围内邻域像素的灰度值中的最小值。\r\n用户没有指定形态学相关参数时，不要调用设置参数的插件，传入的 ILImageMorph 类的文件中已经设置了形态学相关的默认参数。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
    "inputSchema": {
        "title": "ILImageMorph_Erode",
        "description": "这个是腐蚀工具。输出结果中的每个像素为其结构元范围内邻域像素的灰度值中的最小值。\r\n用户没有指定形态学相关参数时，不要调用设置参数的插件，传入的 ILImageMorph 类的文件中已经设置了形态学相关的默认参数。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是输出结果图像URL地址。",
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