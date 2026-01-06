```json
{
    "name": "PatMatchGetPatCenterMode",
    "description": "Get the center mode of the pattern template. 获取当前配置的模板中心设置方式。\r\nThis enumeration represents the mode of the pattern template center. 该枚举表示模板匹配结果中心的设置方式。\r\n返回一个字符串，返回的字符串有以下几种可能：\r\nLPVPatImageCenter  Use the template image center as pattern center, and the angle is 0. 使用模板图像的中心作为匹配结果的中心，其角度为 0°。 \r\nLPVPatTrainedCenter  Use the trained center as pattern center, and use the angle of pattern features' rotated bounding rectangle as 0 degree. 使用训练得到的中心作为匹配结果的中心，使用训练特征的包围旋转矩形的角度作为 0°。\r\nLPVPatCustomCenter  Use user-specified position as pattern center, and user-specified angle as 0 degree. 使用自定义的位置作为匹配结果的中心，使用自定义的角度作为 0°。",
    "inputSchema": {
        "title": "PatMatchGetPatCenterMode",
        "description": "Get the center mode of the pattern template. 获取当前配置的模板中心设置方式。\r\nThis enumeration represents the mode of the pattern template center. 该枚举表示模板匹配结果中心的设置方式。\r\n返回一个字符串，返回的字符串有以下几种可能：\r\nLPVPatImageCenter  Use the template image center as pattern center, and the angle is 0. 使用模板图像的中心作为匹配结果的中心，其角度为 0°。 \r\nLPVPatTrainedCenter  Use the trained center as pattern center, and use the angle of pattern features' rotated bounding rectangle as 0 degree. 使用训练得到的中心作为匹配结果的中心，使用训练特征的包围旋转矩形的角度作为 0°。\r\nLPVPatCustomCenter  Use user-specified position as pattern center, and user-specified angle as 0 degree. 使用自定义的位置作为匹配结果的中心，使用自定义的角度作为 0°。",
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