```json
{
    "name": "il_image_filter",
    "description": "这个是图像滤波工具的初始化工具，创建一个 ILImageFilter 对象。\r\n 初始化图像滤波工具，用于后续的各种滤波操作。\r\nThis is an initialization tool for image filtering, creating an ILImageFilter object. \r\nInitializes the image filter tool for subsequent filtering operations.\r\n返回结构是一个序列化的JSON字符串，属性包括：\r\nLpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。\r\nLpvClassName 表示图像滤波工具的功能调用的对象名称，目前名称应为：ILImageFilter。\r\nInputParameterFile 表示 ILImageFilter 类初始化文件名称。\r\n",
    "inputSchema": {
        "type": "object",
        "properties": {}
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```