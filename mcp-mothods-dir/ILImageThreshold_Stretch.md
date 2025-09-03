```json
{
    "name": "ILImageThreshold_Stretch",
    "description": "这个是拉伸图像工具。拉伸输入图像并输出结果图像。如果用户同时设置了阈值，要先执行设置阈值工具，然后再执行此工具。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;result 属性是输入图像拉伸结果的图片地址",
    "inputSchema": {
        "title": "ILImageThreshold_Stretch",
        "description": "这个是拉伸图像工具。拉伸输入图像并输出结果图像。如果用户同时设置了阈值，要先执行设置阈值工具，然后再执行此工具。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;result 属性是输入图像拉伸结果的图片地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "InputParameterFile": {
                "description": "指定的 ILImageThreshold 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageThreshold 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "InputParameterFile"
        ]
    }
}
```