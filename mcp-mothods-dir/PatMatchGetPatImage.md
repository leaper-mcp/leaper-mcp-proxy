```json
{
    "name": "PatMatchGetPatImage",
    "description": "Get the pattern template image. 获取模板图像。\r\nThe template image is the original image used for training the pattern. 模板图像是用于训练模板的原始图像。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是模板图像的图片URL地址",
    "inputSchema": {
        "title": "PatMatchGetPatImage",
        "description": "Get the pattern template image. 获取模板图像。\r\nThe template image is the original image used for training the pattern. 模板图像是用于训练模板的原始图像。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是模板图像的图片URL地址",
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