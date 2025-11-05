```json
{
    "name": "ImageConvert_Convert",
    "description": "对彩色图像进行颜色空间转换（如 BGR 到 HSV）\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "title": "ImageConvert_Convert",
        "description": "对彩色图像进行颜色空间转换（如 BGR 到 HSV）\r\n 返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "fromColorSpace": {
                "description": "输入图像的颜色空间，例如：LPVColorSpaceBGR（BGR颜色空间，通道顺序为B、G、R）、LPVColorSpaceHSV（HSV颜色空间，通道顺序为H、S、V）、LPVColorSpaceHLS（HLS颜色空间，通道顺序为H、L、S）、LPVColorSpaceYCrCb（YCrCb颜色空间，通道顺序为Y、Cr、Cb）、LPVColorSpaceYUV（YUV颜色空间，通道顺序为Y、U、V）、LPVColorSpaceXYZ（CIE 1931 XYZ颜色空间，通道顺序为X、Y、Z）、LPVColorSpaceLAB（CIE 1976 L*a*b*颜色空间，通道顺序为L、a*、b*）、LPVColorSpaceLUV（CIE 1976 L*u*v*颜色空间，通道顺序为L*、u*、v*）",
                "type": "string"
            },
            "toColorSpace": {
                "description": "目标颜色空间，例如：LPVColorSpaceBGR（BGR颜色空间，通道顺序为B、G、R）、LPVColorSpaceHSV（HSV颜色空间，通道顺序为H、S、V）、LPVColorSpaceHLS（HLS颜色空间，通道顺序为H、L、S）、LPVColorSpaceYCrCb（YCrCb颜色空间，通道顺序为Y、Cr、Cb）、LPVColorSpaceYUV（YUV颜色空间，通道顺序为Y、U、V）、LPVColorSpaceXYZ（CIE 1931 XYZ颜色空间，通道顺序为X、Y、Z）、LPVColorSpaceLAB（CIE 1976 L*a*b*颜色空间，通道顺序为L、a*、b*）、LPVColorSpaceLUV（CIE 1976 L*u*v*颜色空间，通道顺序为L*、u*、v*）",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "fromColorSpace",
            "toColorSpace"
        ]
    }
}
```