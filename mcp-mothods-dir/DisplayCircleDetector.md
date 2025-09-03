```json
{
    "name": "DisplayCircleDetector",
    "description": "这个是针对圆定位的图像的交互工具，并返回检测和定位圆后的图片。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是检测和定位圆后的图片URL地址\r\n",
    "inputSchema": {
        "title": "DisplayCircleDetector",
        "description": "这个是针对圆定位的图像的交互工具，并返回检测和定位圆后的图片。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是检测和定位圆后的图片URL地址\r\n",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "drawFlags": {
                "description": "该可绘制对象的绘制参数，传入类型为 LPVCircleDrawFlags 类型。有效的类型为：LPVCircleDrawCircle = 1（绘制圆。）、LPVCircleDrawCenter = 2（绘制圆的中心点。）、LPVCircleDrawIndex = 8（绘制圆的索引，在其右侧。）、LPVCircleDrawDefault = 1（默认值，只绘制圆。）、LPVCircleDrawAll = 255（绘制所有部分。）",
                "type": "integer"
            },
            "regionJson": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "InputParameterFile": {
                "description": "指定的 ILCircleDetector 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILCircleDetector 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "drawFlags",
            "regionJson",
            "InputParameterFile"
        ]
    }
}
```