```json
{
    "name": "ILImageMorph_SetMorphShape",
    "description": "~english Set the structuring element used in morphology operations with specified shape and size. Returns the configured morphological tool object.\r\nThe return structure is a serialized JSON string with properties including:\r\nLpvClassName (the name of the function-calling object) and InputParameterFile (the parameter file name required for calling the tool function). The values of these properties can be obtained from the return value of preprocessing MCP tools.\r\nLpvClassName represents the name of the morphological tool's function-calling object, currently should be: ILImageMorph (morphological tool function-related object);\r\nInputParameterFile represents the parameter file name for the morphological tool's function-calling object.\r\n~chinese 设置形态学工具中所使用的结构元，可指定结构元的形状和尺寸。并返回设置完成的形态学工具的功能调用的对象。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName（调用工具函数的名称）和 InputParameterFile（调用工具函数需要传入的参数文件名称）。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示形态学工具的功能调用的对象名称，目前名称应为：ILImageMorph（形态学工具的功能相关对象）；\r\nInputParameterFile 表示形态学工具的功能调用的对象的参数文件名称。",
    "inputSchema": {
        "title": "ILImageMorph_SetMorphShape",
        "description": "~english Set the structuring element used in morphology operations with specified shape and size. Returns the configured morphological tool object.\r\nThe return structure is a serialized JSON string with properties including:\r\nLpvClassName (the name of the function-calling object) and InputParameterFile (the parameter file name required for calling the tool function). The values of these properties can be obtained from the return value of preprocessing MCP tools.\r\nLpvClassName represents the name of the morphological tool's function-calling object, currently should be: ILImageMorph (morphological tool function-related object);\r\nInputParameterFile represents the parameter file name for the morphological tool's function-calling object.\r\n~chinese 设置形态学工具中所使用的结构元，可指定结构元的形状和尺寸。并返回设置完成的形态学工具的功能调用的对象。\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName（调用工具函数的名称）和 InputParameterFile（调用工具函数需要传入的参数文件名称）。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示形态学工具的功能调用的对象名称，目前名称应为：ILImageMorph（形态学工具的功能相关对象）；\r\nInputParameterFile 表示形态学工具的功能调用的对象的参数文件名称。",
        "type": "object",
        "properties": {
            "shapeTypeString": {
                "description": "~english The shape of the structuring element, of type LPVMorphShape, describing the shape of the kernel used in morphological operations. Valid types are:\r\nLPVMorphRect (rectangular kernel), LPVMorphCross (cross-shaped kernel), LPVMorphEllipse (elliptical kernel)~chinese 结构元的形状，传入类型为LPVMorphShape类型，描述形态学工具中所使用的核的形状。(如: LPVMorphRect )有效的类型为：\r\nLPVMorphRect（矩形核）、LPVMorphCross（十字形核）、LPVMorphEllipse（椭圆形核）",
                "type": "string"
            },
            "kWidth": {
                "description": "~english The width of the structuring element, of type int, must be an odd number such as 3, 5, 7, etc.~chinese 结构元的宽度，传入类型为int类型，需要是一个奇数，如 3, 5, 7 等。",
                "type": "integer"
            },
            "kHeight": {
                "description": "~english The height of the structuring element, of type int, must be an odd number such as 3, 5, 7, etc. If set to 0, use the same value as width.~chinese 结构元的高度，传入类型为int类型，需要是一个奇数，如 3, 5, 7 等。若设置为 0，则使用与宽度相同。",
                "type": "integer"
            },
            "InputParameterFile": {
                "description": "~english The file path of the specified ILImageMorph class, representing the parameter file name required for calling the tool function.Before calling this tool, ensure that the ILImageMorph initialization tool has been called exactly once in the preprocessing.The value of this property needs to be obtained from the InputParameterFile field of the preprocessing MCP tool's return value.~chinese 指定的 ILImageMorph 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageMorph 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "shapeTypeString",
            "kWidth",
            "kHeight",
            "InputParameterFile"
        ]
    }
}
```