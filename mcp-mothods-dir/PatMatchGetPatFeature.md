```json
{
    "name": "PatMatchGetPatFeature",
    "description": "Get the feature points of trained pattern. 获取模板的特征点。\r\nThe feature points are extracted from the trained template. 特征点通过给定的形状区域提取。\r\nLevel parameter specifies the level of required features: Level 0 (default) for level 0 of original size, 1 for level 1 in scaled size. 层级参数指定获取特征的层级：0（默认值）表示原始尺度的 0 层特征，1 表示缩小尺度的 1 层特征。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nCount(点位的数量) 和 Empty(是否为空，ture为空，false则不为空) 和 Item(点的位置的数组，数组中的对象包含X,Y属性分别代表x和y的坐标) 。",
    "inputSchema": {
        "title": "PatMatchGetPatFeature",
        "description": "Get the feature points of trained pattern. 获取模板的特征点。\r\nThe feature points are extracted from the trained template. 特征点通过给定的形状区域提取。\r\nLevel parameter specifies the level of required features: Level 0 (default) for level 0 of original size, 1 for level 1 in scaled size. 层级参数指定获取特征的层级：0（默认值）表示原始尺度的 0 层特征，1 表示缩小尺度的 1 层特征。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nCount(点位的数量) 和 Empty(是否为空，ture为空，false则不为空) 和 Item(点的位置的数组，数组中的对象包含X,Y属性分别代表x和y的坐标) 。",
        "type": "object",
        "properties": {
            "matchClassObjDescriptionJson": {
                "description": "模板匹配的功能对象用于训练模板匹配的功能。如果用户没有指定模板匹配的功能对象，请创建一个模板匹配的功能对象后传入。\r\n如果用户指定模板匹配的功能对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示模板匹配的功能对象名称，当前名称应为：ILMatch (模板匹配的功能对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "level": {
                "description": "指定获取特征的层级。可能的取值有：-1 表示所有层级，0（默认值）表示原始尺度的 0 层特征，1 表示缩小尺度的 1 层特征 。",
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