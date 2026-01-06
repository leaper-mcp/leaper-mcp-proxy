```json
{
    "name": "PatMatchGetPatCenter",
    "description": "Get the center of the pattern template. 获取当前配置的模板中心。\r\nThe template center indicates the report position of the matching result. 匹配结果将基于配置方式输出不同的中心点坐标。\r\nFor example, if the template center is moved to the left-top corner of the template image, we'll then always report the same left-top corner as the matching result. 如若设置匹配图像的左上角点作为中心，所有的匹配结果将总是输出相同的左上角位置作为中心。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\npatX 表示返回模板中心的 x 坐标,double类型。\r\npatY 表示返回模板中心的 y 坐标,double类型。\r\npatAngle 返回模板的 0° 角度 ,double类型。",
    "inputSchema": {
        "title": "PatMatchGetPatCenter",
        "description": "Get the center of the pattern template. 获取当前配置的模板中心。\r\nThe template center indicates the report position of the matching result. 匹配结果将基于配置方式输出不同的中心点坐标。\r\nFor example, if the template center is moved to the left-top corner of the template image, we'll then always report the same left-top corner as the matching result. 如若设置匹配图像的左上角点作为中心，所有的匹配结果将总是输出相同的左上角位置作为中心。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\npatX 表示返回模板中心的 x 坐标,double类型。\r\npatY 表示返回模板中心的 y 坐标,double类型。\r\npatAngle 返回模板的 0° 角度 ,double类型。",
        "type": "object",
        "properties": {
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请创建一个模板匹配的功能对象后传入。\r\n如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "matchClassObjDescriptionJson"
        ]
    }
}
```