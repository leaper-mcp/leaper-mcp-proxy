```json
{
    "name": "il_circle_detector_set_find_by",
    "description": "设置圆定位工具所使用的检测的搜索策略，并返回设置完成的圆定位工具的功能调用的对象。\r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示圆定位工具的功能调用的对象名称，目前名称应为：ILCircleDetector (圆定位工具的功能相关对象);\r\nInputParameterFile 表示圆定位工具的功能调用的对象的参数文件名称。\r\n",
    "inputSchema": {
        "type": "object",
        "properties": {
            "findBy": {
                "description": "检测的搜索策略，传入类型为 LPVFindBy 类型。指的是如何从区域中的多条符合条件的候选圆中选取结果。有效的类型为：LPVFindBest（选择一个或多个最高分。）、LPVFindFirst（沿着区域的扫描方向，选择第一个或前几个。）、LPVFindLast（沿着区域的扫描方向，选择最后一个或后几个。）、LPVFindCentral（基于结果距离区域中心的距离，选择最靠近中心的一个或多个。当前仅用于卡尺工具。）",
                "type": "string",
                "enum": [
                    "LPVFindBest",
                    "LPVFindFirst",
                    "LPVFindLast",
                    "LPVFindCentral"
                ]
            },
            "InputParameterFile": {
                "description": "指定的 ILCircleDetector 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILCircleDetector 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "findBy",
            "InputParameterFile"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```