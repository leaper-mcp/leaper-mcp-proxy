```json
{
    "name": "il_image_threshold_stretch",
    "description": "Stretch the input image and output the result image. Each output pixel represents the difference between the greyscale value of each input pixel and the threshold lower bound. For example, if a pixel value is 100 and the threshold lower bound is 25, then the output pixel value will be 75. If the user has set threshold values, execute the set threshold tool first, then execute this tool. Returns a serialized JSON structure containing: LpvClassName indicating the function name; InputParameterFile representing the parameter file name; result property representing the URL address of the stretched image;这个是拉伸图像工具。拉伸输入图像并输出结果图像。计算输入图像中的每个像素，其灰度值与阈值范围下限的距离。如若阈值范围下限为 25，灰度值为 100 的像素，其输出值为 75。如果用户同时设置了阈值，要先执行设置阈值工具，然后再执行此工具。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;result 属性是输入图像拉伸结果的图片地址",
    "inputSchema": {
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
    },
    "execution": {
        "taskSupport": "optional"
    }
}
```