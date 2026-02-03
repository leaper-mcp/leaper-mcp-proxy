```json
{
    "name": "edge_filter_gradient_v",
    "description": "Vertically oriented edges are represented by bright pixels.\r\n垂直梯度，垂直边缘在输出图像中表现为较亮的像素。\r\nProvides image edge enhancement functionality for vertical gradient.\r\n提供了图像边缘增强的功能，在垂直梯度。\r\nReturns a serialized JSON string with properties: ResultImg (output result image URL).\r\n返回结构是一个序列化的json，其中：ResultImg属性是输出结果图像URL地址",
    "inputSchema": {
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "edgeFilterClassObjDescriptionJson": {
                "description": "用于图像边缘增强的功能调用的对象。如果用户没有指定图像边缘增强的功能相关对象，请调用EdgeFilterNew方法创建一个图像边缘增强的功能调用的对象后传入。\r\n如果用户指定图像边缘增强的功能相关对象，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示图像边缘增强的功能调用的对象名称，目前名称应为：ILEdgeFilter (图像边缘增强的功能相关对象);\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "edgeFilterClassObjDescriptionJson"
        ]
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```