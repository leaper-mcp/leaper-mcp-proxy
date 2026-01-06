```json
{
    "name": "PatMatchSetPatCenter",
    "description": "Customize the center of the pattern template. 修改模板匹配结果中心的设置方式。\r\nBy default, we use the template image center as pattern center. 默认设置为使用模板图像的中心作为匹配结果中心。\r\nThe template center indicates the report position of the matching result. 匹配结果将基于配置方式输出不同的中心点坐标。\r\nFor example, if the template center is moved to the left-top corner of the template image, we'll then always report the same left-top corner as the matching result. 如若设置匹配图像的左上角点作为中心，所有的匹配结果将总是输出相同的左上角位置作为中心。\r\n如果别的工具需要修改后的模板匹配的功能对象，可以使用当前对象Json。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示模板匹配的功能对象名称，目前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示模板匹配的功能对象的参数文件名称。",
    "inputSchema": {
        "title": "PatMatchSetPatCenter",
        "description": "Customize the center of the pattern template. 修改模板匹配结果中心的设置方式。\r\nBy default, we use the template image center as pattern center. 默认设置为使用模板图像的中心作为匹配结果中心。\r\nThe template center indicates the report position of the matching result. 匹配结果将基于配置方式输出不同的中心点坐标。\r\nFor example, if the template center is moved to the left-top corner of the template image, we'll then always report the same left-top corner as the matching result. 如若设置匹配图像的左上角点作为中心，所有的匹配结果将总是输出相同的左上角位置作为中心。\r\n如果别的工具需要修改后的模板匹配的功能对象，可以使用当前对象Json。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示模板匹配的功能对象名称，目前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示模板匹配的功能对象的参数文件名称。",
        "type": "object",
        "properties": {
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请创建一个模板匹配的功能对象后传入。\r\n如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "centerMode": {
                "description": "匹配结果中心的设置方式的字符串,有以下几种可能：\r\nLPVPatImageCenter  表示 使用模板图像的中心作为匹配结果的中心，其角度为 0°。 \r\nLPVPatTrainedCenter  表示 使用训练得到的中心作为匹配结果的中心，使用训练特征的包围旋转矩形的角度作为 0°。\r\nLPVPatCustomCenter   表示 使用自定义的位置作为匹配结果的中心，使用自定义的角度作为 0°。",
                "type": "string"
            },
            "patX": {
                "description": "若使用自定义位置，输入该位置的 x 坐标 duoble 数字类型，默认可传0 ，如使用默认值请告知用户。\r\n",
                "type": "number"
            },
            "patY": {
                "description": "若使用自定义位置，输入该位置的 y 坐标 duoble 数字类型，默认可传0 ，如使用默认值请告知用户。\r\n",
                "type": "number"
            },
            "patAngle": {
                "description": "若使用自定义位置，输入指定的角度作为 0°，默认可传0 ，如使用默认值请告知用户。\r\n",
                "type": "number"
            }
        },
        "required": [
            "matchClassObjDescriptionJson",
            "centerMode",
            "patX",
            "patY",
            "patAngle"
        ]
    }
}
```