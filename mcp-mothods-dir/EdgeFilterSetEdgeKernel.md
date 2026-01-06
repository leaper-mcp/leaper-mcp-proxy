```json
{
    "name": "EdgeFilterSetEdgeKernel",
    "description": "Set the kernel used in edge filtering of specified type and size.\r\n设置图像边缘滤波器所使用的滤波核类型核尺寸。\r\nSets the filter kernel type and size for image edge enhancement, and returns the configured edge filter object.\r\n提供了图像边缘增强的功能,设置图像边缘滤波器所使用的滤波核类型核尺寸 ,并返回设置完成的图像边缘增强的功能调用的对象。\r\nIf other edge enhancement functions depend on this edge filter object, they can use the current object JSON.\r\n如果别的图像边缘增强的功能要依赖于当前图像边缘增强的功能调用对象来调用，可以使用当前对象Json。\r\nReturns a serialized JSON string with properties: LpvClassName (function name) and InputParameterFile (parameter file name).\r\n返回结构是一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName should be: ILEdgeFilter (edge enhancement function object).\r\nLpvClassName 表示图像边缘增强的功能调用的对象名称，目前名称应为：ILEdgeFilter (图像边缘增强的功能相关对象);\r\nInputParameterFile represents the parameter file name for the edge filter object.\r\nInputParameterFile 表示图像边缘增强的功能调用的对象的参数文件名称。",
    "inputSchema": {
        "title": "EdgeFilterSetEdgeKernel",
        "description": "Set the kernel used in edge filtering of specified type and size.\r\n设置图像边缘滤波器所使用的滤波核类型核尺寸。\r\nSets the filter kernel type and size for image edge enhancement, and returns the configured edge filter object.\r\n提供了图像边缘增强的功能,设置图像边缘滤波器所使用的滤波核类型核尺寸 ,并返回设置完成的图像边缘增强的功能调用的对象。\r\nIf other edge enhancement functions depend on this edge filter object, they can use the current object JSON.\r\n如果别的图像边缘增强的功能要依赖于当前图像边缘增强的功能调用对象来调用，可以使用当前对象Json。\r\nReturns a serialized JSON string with properties: LpvClassName (function name) and InputParameterFile (parameter file name).\r\n返回结构是一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName should be: ILEdgeFilter (edge enhancement function object).\r\nLpvClassName 表示图像边缘增强的功能调用的对象名称，目前名称应为：ILEdgeFilter (图像边缘增强的功能相关对象);\r\nInputParameterFile represents the parameter file name for the edge filter object.\r\nInputParameterFile 表示图像边缘增强的功能调用的对象的参数文件名称。",
        "type": "object",
        "properties": {
            "kTypeString": {
                "description": "核类型，目前有三种核类型，LPVSobel , LPVPrewitt , LPVScharr 。传入类型为字符串类型\r\n其中LPVSobel表示：Sobel 核，该核结合了高斯模糊和差分的效果，因此对噪声的抗干扰性较强。\r\n其中LPVPrewitt表示：Prewitt 核，相较于Sobel算子的加权差分机制，Prewitt算子未引入中心像素权重，适用于边缘灰度对比明显且噪声较多的场景。\r\n其中LPVScharr表示：Scharr 核，其精度略差于 Sobel 核但更平滑。",
                "type": "string"
            },
            "kWidth": {
                "description": "滤波核的宽度,传入类型为int类型,需要是一个 3 ~ 31 之间的奇数，如 3, 5, 7 等。 若核尺寸设置为 1，将退化为 (-1, 1)，指定的核类型不起作用。 ",
                "type": "integer"
            },
            "kHeight": {
                "description": "滤波核的高度,传入类型为int类型，需要是一个 3 ~ 31 之间的奇数，如 3, 5, 7 等。若设置为 0，则使用与宽度相同。  ",
                "type": "integer"
            },
            "edgeFilterClassObjDescriptionJson": {
                "description": "用于图像边缘增强的功能调用的对象。如果用户没有指定图像边缘增强的功能相关对象，请调用EdgeFilterNew方法创建一个图像边缘增强的功能调用的对象后传入。\r\n如果用户指定图像边缘增强的功能相关对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示图像边缘增强的功能调用的对象名称，目前名称应为：ILEdgeFilter (图像边缘增强的功能相关对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "kTypeString",
            "kWidth",
            "kHeight",
            "edgeFilterClassObjDescriptionJson"
        ]
    }
}
```