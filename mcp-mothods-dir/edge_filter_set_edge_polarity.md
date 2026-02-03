```json
{
    "name": "edge_filter_set_edge_polarity",
    "description": "Set the edge polarity of interest in edge filtering.\r\n设置滤波器的边缘极性，以获得感兴趣极性的边缘。\r\nSets the edge polarity of the filter to obtain edges of interest, and returns the configured edge filter object.\r\n提供了图像边缘增强的功能,设置滤波器的边缘极性，以获得感兴趣极性的边缘 ,并返回设置完成的图像边缘增强的功能调用的对象。\r\nIf other edge enhancement functions depend on this edge filter object, they can use the current object JSON.\r\n如果别的图像边缘增强的功能要依赖于当前图像边缘增强的功能调用对象来调用，可以使用当前对象Json。\r\nReturns a serialized JSON string with properties: LpvClassName (function name) and InputParameterFile (parameter file name).\r\n返回结构是一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName should be: ILEdgeFilter (edge enhancement function object).\r\nLpvClassName 表示图像边缘增强的功能调用的对象名称，目前名称应为：ILEdgeFilter (图像边缘增强的功能相关对象);\r\nInputParameterFile represents the parameter file name for the edge filter object.\r\nInputParameterFile 表示图像边缘增强的功能调用的对象的参数文件名称。",
    "inputSchema": {
        "type": "object",
        "properties": {
            "xPolarityString": {
                "description": "水平方向边缘的极性（以从左到右为方向）。默认设置为任意极性。 \r\n存在 LPVBlack2White , LPVWhite2Black , LPVPolarityEitherEdge , LPVBlackOnWhite , LPVWhiteOnBlack , LPVPolarityEitherObject , LPVPolarityEither 种类型 \r\n类型 LPVBlack2White 表示：沿着区域的扫描方向看，边处于从黑（暗）到白（亮）的边缘 \r\n类型 LPVWhite2Black 表示：沿着区域的扫描方向看，边处于从白（亮）到黑（暗）的边缘  \r\n类型 LPVPolarityEitherEdge 表示：接受任意一种边缘极性，白到黑，或者黑到白 \r\n类型 LPVBlackOnWhite 表示：黑色（暗）目标在白色（亮）背景上 \r\n类型 LPVWhiteOnBlack 表示：白色（亮）目标在黑色（暗）背景上 \r\n类型 LPVPolarityEitherObject 表示：接受任意一种目标极性，白物体黑背景，或者黑物体白背景 \r\n类型 LPVPolarityEither 表示：接受任意一种极性  \r\n传入类型字符串即可，如 \"LPVPolarityEither\" ",
                "type": "string"
            },
            "yPolarityString": {
                "description": "垂直方向边缘的极性（以从上到下为方向）。默认设置为任意极性。 \r\n存在 LPVBlack2White , LPVWhite2Black , LPVPolarityEitherEdge , LPVBlackOnWhite , LPVWhiteOnBlack , LPVPolarityEitherObject , LPVPolarityEither 种类型 \r\n类型 LPVBlack2White 表示：沿着区域的扫描方向看，边处于从黑（暗）到白（亮）的边缘 \r\n类型 LPVWhite2Black 表示：沿着区域的扫描方向看，边处于从白（亮）到黑（暗）的边缘  \r\n类型 LPVPolarityEitherEdge 表示：接受任意一种边缘极性，白到黑，或者黑到白 \r\n类型 LPVBlackOnWhite 表示：黑色（暗）目标在白色（亮）背景上 \r\n类型 LPVWhiteOnBlack 表示：白色（亮）目标在黑色（暗）背景上 \r\n类型 LPVPolarityEitherObject 表示：接受任意一种目标极性，白物体黑背景，或者黑物体白背景 \r\n类型 LPVPolarityEither 表示：接受任意一种极性  \r\n传入类型字符串即可，如 \"LPVPolarityEither\" ",
                "type": "string"
            },
            "edgeFilterClassObjDescriptionJson": {
                "description": "用于图像边缘增强的功能调用的对象。如果用户没有指定图像边缘增强的功能相关对象，请调用EdgeFilterNew方法创建一个图像边缘增强的功能调用的对象后传入。\r\n如果用户指定图像边缘增强的功能相关对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示图像边缘增强的功能调用的对象名称，目前名称应为：ILEdgeFilter (图像边缘增强的功能相关对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "xPolarityString",
            "yPolarityString",
            "edgeFilterClassObjDescriptionJson"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```