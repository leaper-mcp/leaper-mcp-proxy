```json
{
    "name": "PatMatchGetPatFeature",
    "description": "获取当前模板匹配的功能对象 的特征点 。返回一组 位置点(Point) 的集合。\r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\nCount(点位的数量) 和 Empty(是否为空，ture为空，false则不为空) 和 Item(点的位置的数组，数组中的对象包含X,Y属性分别代表x和y的坐标) 。\r\n",
    "inputSchema": {
        "title": "PatMatchGetPatFeature",
        "description": "获取当前模板匹配的功能对象 的特征点 。返回一组 位置点(Point) 的集合。\r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\nCount(点位的数量) 和 Empty(是否为空，ture为空，false则不为空) 和 Item(点的位置的数组，数组中的对象包含X,Y属性分别代表x和y的坐标) 。\r\n",
        "type": "object",
        "properties": {
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请创建一个模板匹配的功能对象后传入。\r\n如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。\r\n",
                "type": "string"
            },
            "level": {
                "description": "指定获取特征的层级。可能的取值有：-1 表示所有层级，0（默认值）表示原始尺度的 0 层特征，1 表示缩小尺度的 1 层特征 。\r\n",
                "type": "integer"
            }
        },
        "required": [
            "matchClassObjDescriptionJson",
            "level"
        ]
    }
}
```