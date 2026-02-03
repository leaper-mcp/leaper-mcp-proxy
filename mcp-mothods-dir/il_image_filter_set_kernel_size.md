```json
{
    "name": "il_image_filter_set_kernel_size",
    "description": "设置图像滤波工具的滤波核尺寸。\r\nChange kernel size used in the filter, by default it's a 3x3 kernel.\r\nLarge kernel size results usually in stronger filtering effect, but also slower.\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示图像滤波工具的功能调用的对象名称，目前名称应为：ILImageFilter。\r\nInputParameterFile 表示图像滤波工具的功能调用的对象的参数文件名称。",
    "inputSchema": {
        "type": "object",
        "properties": {
            "kWidth": {
                "description": "滤波核的宽度,传入类型为int类型,需要是一个 3 ~ 31 之间的奇数，如 3, 5, 7 等。",
                "type": "integer"
            },
            "kHeight": {
                "description": "滤波核的高度,传入类型为int类型，需要是一个 3 ~ 31 之间的奇数，如 3, 5, 7 等。若设置为 0，则使用与宽度相同。",
                "type": "integer"
            },
            "InputParameterFile": {
                "description": "指定的 ILImageFilter 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageFilter 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "kWidth",
            "kHeight",
            "InputParameterFile"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```