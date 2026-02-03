```json
{
    "name": "il_image_filter_set_kernel_sigma",
    "description": "设置图像滤波工具的Sigma值和Gain值。\r\nChange the kernel using the specified sigma and gain value.\r\nSigma controls the filter kernel's smoothness, gain controls the overall strength of the sharpening effect.\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示图像滤波工具的功能调用的对象名称，目前名称应为：ILImageFilter。\r\nInputParameterFile 表示图像滤波工具的功能调用的对象的参数文件名称。",
    "inputSchema": {
        "type": "object",
        "properties": {
            "kSigma": {
                "description": "滤波核的平滑程度，传入类型为double类型，对于 HighPass()，Gaussian() 和 Sharpen() 方法，若设置为 0（默认），则由核尺寸自动计算为：1/6。\r\n若核尺寸设置为 0，则由 Sigma 值自动计算合适的核尺寸，约为 6 × kSigma。\r\n对于 EdgePreserveDenoise()， EdgePreserveTextureEnhance()，若设置为 0，则不做额外的平滑处理 。 ",
                "type": "number"
            },
            "kGain": {
                "description": "锐化强度,传入类型为double类型，默认值为1.0，对于 Sharpen()，kGain 用于控制锐化效果的强度。  ",
                "type": "number"
            },
            "InputParameterFile": {
                "description": "指定的 ILImageFilter 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageFilter 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "kSigma",
            "kGain",
            "InputParameterFile"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```