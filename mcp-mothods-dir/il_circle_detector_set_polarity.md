```json
{
    "name": "il_circle_detector_set_polarity",
    "description": "设置圆定位工具所使用的检测的边缘极性，并返回设置完成的圆定位工具的功能调用的对象。\r\n 返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示圆定位工具的功能调用的对象名称，目前名称应为：ILCircleDetector (圆定位工具的功能相关对象);\r\nInputParameterFile 表示圆定位工具的功能调用的对象的参数文件名称。\r\n",
    "inputSchema": {
        "type": "object",
        "properties": {
            "polarity": {
                "description": "检测的边缘极性，传入类型为 LPVPolarity 类型。极性指的是边缘相对于区域的扫描方向（圆环区域由内向外）的变换方式，由白（亮）像素向黑（暗）像素转变，或由黑（暗）像素向白（亮）像素转变。有效的类型为：LPVBlack2White（沿着区域的扫描方向看，边处于从黑（暗）到白（亮）的边缘。）、LPVWhite2Black（沿着区域的扫描方向看，边处于从白（亮）到黑（暗）的边缘。）、LPVPolarityEitherEdge（接受任意一种边缘极性，白到黑，或者黑到白。）、LPVBlackOnWhite（黑色（暗）目标在白色（亮）背景上。）、LPVWhiteOnBlack（白色（亮）目标在黑色（暗）背景上。）、LPVPolarityEitherObject（接受任意一种目标极性，白物体黑背景，或者黑物体白背景。）、LPVPolarityEither（接受任意一种极性。）",
                "type": "string",
                "enum": [
                    "LPVBlack2White",
                    "LPVWhite2Black",
                    "LPVPolarityEitherEdge",
                    "LPVBlackOnWhite",
                    "LPVWhiteOnBlack",
                    "LPVPolarityEitherObject",
                    "LPVPolarityEither"
                ]
            },
            "InputParameterFile": {
                "description": "指定的 ILCircleDetector 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILCircleDetector 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "polarity",
            "InputParameterFile"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```