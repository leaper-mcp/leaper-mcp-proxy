```json
{
    "name": "ILOCR_IB_Detect",
    "description": "这个是分割并识别行和字符工具。基于输入的图像和区域,分割并识别行和字符,返回字符分割和识别的结果和分数。Results 是字符分割和识别的信息，其中 ocrRes 表示分割和识别的所有结果，每个字符用空格隔开。ocrScoreRes 表示分割和识别的所有分数，用空格隔开，与结果一一对应。",
    "inputSchema": {
        "title": "ILOCR_IB_Detect",
        "description": "这个是分割并识别行和字符工具。基于输入的图像和区域,分割并识别行和字符,返回字符分割和识别的结果和分数。Results 是字符分割和识别的信息，其中 ocrRes 表示分割和识别的所有结果，每个字符用空格隔开。ocrScoreRes 表示分割和识别的所有分数，用空格隔开，与结果一一对应。",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "isGetShape": {
                "description": "是否获取每个文字形状点位，默认为 false",
                "type": "boolean",
                "default": false
            }
        },
        "required": [
            "imageUrl"
        ]
    }
}
```