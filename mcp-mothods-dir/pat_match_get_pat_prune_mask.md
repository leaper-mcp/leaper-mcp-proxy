```json
{
    "name": "pat_match_get_pat_prune_mask",
    "description": "Get the prune mask. 获取特征点剔除蒙版。\r\nThe prune mask shows which features have been excluded from the pattern. 特征点剔除蒙版显示哪些特征已被从模板中排除。\r\nIt will be an empty image, if the template has been pruned. 若当前模板没有进行特征点剔除，则返回一个空的图像。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是特征点剔除蒙版图像的图片URL地址",
    "inputSchema": {
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
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```