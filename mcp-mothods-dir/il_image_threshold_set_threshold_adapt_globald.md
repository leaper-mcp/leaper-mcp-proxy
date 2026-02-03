```json
{
    "name": "il_image_threshold_set_threshold_adapt_globald",
    "description": "Use global-adaptive threshold value. The optimal threshold value is calculated base on the entire input image, then revised by the given bias value. The lower bound of threshold value is t - lbBias, the upper bound is t + ubBias. Returns a serialized JSON structure containing: LpvClassName indicating the function name; InputParameterFile representing the parameter file name;这个是 设置并使用全局自适应阈值 工具。自动基于整幅图像上的像素灰度值分布计算一个合适的阈值，然后按照用户设置的上下偏置，生成阈值范围。全局自适应阈值范围的下限为 t - lbBias，上限为 t + ubBias。返回结构是一个序列化的json，其中LpvClassName 表示调用工具函数的名称；InputParameterFile 表示调用工具函数需要传入的参数文件名称;",
    "inputSchema": {
        "type": "object",
        "properties": {
            "lbBias": {
                "description": "基于全局自适应阈值的下限修正值",
                "type": "integer"
            },
            "ubBias": {
                "description": "基于全局自适应阈值的上限修正值",
                "type": "integer"
            },
            "InputParameterFile": {
                "description": "指定的 ILImageThreshold 类的文件地址，调用工具函数需要传入的参数文件名称。在调用此工具前要保证前处理中一定要有且仅有一次的 ILImageThreshold 初始化工具调用。这个属性的值需要从前处理的MCP工具的返回值 InputParameterFile 字段中获取。",
                "type": "string"
            }
        },
        "required": [
            "lbBias",
            "ubBias",
            "InputParameterFile"
        ]
    }
}
```