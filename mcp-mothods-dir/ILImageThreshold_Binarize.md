```json
{
    "name": "ILImageThreshold_Binarize",
    "description": "Binarize the input image and return the result new image. If the lower bound of threshold value is smaller than the upper bound, pixels within the lower and upper bound of threshold value is set to the object level (maximum value), otherwise, the output pixel is set to the background level (0). If the user has set threshold values, execute the set threshold tool first, then execute this tool. Returns a serialized JSON structure containing: LpvClassName indicating the function name; InputParameterFile representing the parameter file name; result property representing the URL address of the binarized image;这个是二值化图像工具。二值化输入图像并输出结果图像。若所设置的阈值范围的下限小于上限，输入图像中灰度值在阈值范围内的像素，在结果图中将被设置为前景（最大数值），反之，则被设置为背景（0）。如果用户同时设置了阈值，要先执行设置阈值工具，然后再执行此工具。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;result 属性是输入图像二值化结果的图片地址",
    "inputSchema": {
        "title": "ILImageThreshold_Binarize",
        "description": "Binarize the input image and return the result new image. If the lower bound of threshold value is smaller than the upper bound, pixels within the lower and upper bound of threshold value is set to the object level (maximum value), otherwise, the output pixel is set to the background level (0). If the user has set threshold values, execute the set threshold tool first, then execute this tool. Returns a serialized JSON structure containing: LpvClassName indicating the function name; InputParameterFile representing the parameter file name; result property representing the URL address of the binarized image;这个是二值化图像工具。二值化输入图像并输出结果图像。若所设置的阈值范围的下限小于上限，输入图像中灰度值在阈值范围内的像素，在结果图中将被设置为前景（最大数值），反之，则被设置为背景（0）。如果用户同时设置了阈值，要先执行设置阈值工具，然后再执行此工具。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;result 属性是输入图像二值化结果的图片地址",
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