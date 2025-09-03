```json
{
    "name": "PatMatchGetPatCenter",
    "description": "提供获取当前模板匹配的功能对象 配置的 模板中心 的功能 \r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\npatX 表示返回模板中心的 x 坐标,double类型。\r\npatY 表示返回模板中心的 y 坐标,double类型。\r\npatAngle 返回模板的 0° 角度 ,double类型。\r\n",
    "inputSchema": {
        "title": "PatMatchGetPatCenter",
        "description": "提供获取当前模板匹配的功能对象 配置的 模板中心 的功能 \r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\npatX 表示返回模板中心的 x 坐标,double类型。\r\npatY 表示返回模板中心的 y 坐标,double类型。\r\npatAngle 返回模板的 0° 角度 ,double类型。\r\n",
        "type": "object",
        "properties": {
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请创建一个模板匹配的功能对象后传入。\r\n如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。\r\n",
                "type": "string"
            }
        },
        "required": [
            "matchClassObjDescriptionJson"
        ]
    }
}
```