```json
{
    "name": "EdgeFilterNew",
    "description": "This interface provide functionalities of edge extraction.\r\n该接口类提供了图像边缘增强的功能。\r\nTo use this interface, you should create a LEdgeFilter object.\r\n使用这个接口，需要创建一个 LEdgeFilter 对象。\r\nCreates a new edge filter object for image edge enhancement.\r\n创建一个图像边缘增强的功能调用的对象。\r\nIf other tools need the edge filter object, they can use the current object JSON.\r\n如果别的工具需要图像边缘增强的功能调用的对象，可以使用当前对象Json。\r\nReturns a serialized JSON string with properties: LpvClassName (function name) and InputParameterFile (parameter file name).\r\n返回结构是一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName should be: ILEdgeFilter (edge enhancement function object).\r\nLpvClassName 表示图像边缘增强的功能调用的对象名称，目前名称应为：ILEdgeFilter (图像边缘增强的功能调用的对象);\r\nInputParameterFile represents the parameter file name for the edge filter object.\r\nInputParameterFile 表示图像边缘增强的功能调用的对象的参数文件名称。",
    "inputSchema": {
        "title": "EdgeFilterNew",
        "description": "This interface provide functionalities of edge extraction.\r\n该接口类提供了图像边缘增强的功能。\r\nTo use this interface, you should create a LEdgeFilter object.\r\n使用这个接口，需要创建一个 LEdgeFilter 对象。\r\nCreates a new edge filter object for image edge enhancement.\r\n创建一个图像边缘增强的功能调用的对象。\r\nIf other tools need the edge filter object, they can use the current object JSON.\r\n如果别的工具需要图像边缘增强的功能调用的对象，可以使用当前对象Json。\r\nReturns a serialized JSON string with properties: LpvClassName (function name) and InputParameterFile (parameter file name).\r\n返回结构是一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName should be: ILEdgeFilter (edge enhancement function object).\r\nLpvClassName 表示图像边缘增强的功能调用的对象名称，目前名称应为：ILEdgeFilter (图像边缘增强的功能调用的对象);\r\nInputParameterFile represents the parameter file name for the edge filter object.\r\nInputParameterFile 表示图像边缘增强的功能调用的对象的参数文件名称。",
        "type": "object",
        "properties": {}
    }
}
```