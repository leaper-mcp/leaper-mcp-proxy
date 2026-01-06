```json
{
    "name": "DisplayLineDetector",
    "description": "Display the line detection results. 这个是针对直线定位的图像的交互工具，并返回检测和定位直线后的图片。\r\nThis interface provide functionalities of the display control. 该接口提供显示控件功能。\r\nUsually you add the display control via the Toolbox in Visual Studio. 通常可通过 Visual Studio 的工具箱，将显示控件加入到应用程序窗口中。\r\nThis interface helps you to manage the scene in the display control, for the image, regions, geometric primitives and algorithms' results to shown in the control. 该接口提供管理显示窗口内场景的功能，用于设置场景中的图像，增加删除场景中的 region、几何形状和算法结果等。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是检测和定位直线后的图片URL地址",
    "inputSchema": {
        "title": "DisplayLineDetector",
        "description": "Display the line detection results. 这个是针对直线定位的图像的交互工具，并返回检测和定位直线后的图片。\r\nThis interface provide functionalities of the display control. 该接口提供显示控件功能。\r\nUsually you add the display control via the Toolbox in Visual Studio. 通常可通过 Visual Studio 的工具箱，将显示控件加入到应用程序窗口中。\r\nThis interface helps you to manage the scene in the display control, for the image, regions, geometric primitives and algorithms' results to shown in the control. 该接口提供管理显示窗口内场景的功能，用于设置场景中的图像，增加删除场景中的 region、几何形状和算法结果等。\r\n返回结构是一个序列化的json，其中：\r\nResultImg属性是检测和定位直线后的图片URL地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "drawFlags": {
                "description": "该可绘制对象的绘制参数，传入类型为 LPVLineDrawFlags 类型。有效的类型为：LPVLineDrawLine = 1（绘制直线。）、LPVLineDrawMidPoint = 2（绘制直线的中点。）、LPVLineDrawEndPoints = 4（绘制的端点。）、LPVLineDrawIndex = 8（绘制直线的索引，在其中点的右下方。）、LPVLineDrawDefault = 1（默认值，只绘制直线。）、LPVLineDrawAll = 255（绘制所有部分。）",
                "type": "integer"
            },
            "regionJson": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILRotRectRegion (旋转矩形区域对象)InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            },
            "InputParameterFile": {
                "description": "指定的 ILLineDetector 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILLineDetector 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
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