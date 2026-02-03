```json
{
    "name": "image_convert_convert_color",
    "description": "颜色空间转换\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nBlue: 转换后的蓝色通道值\r\nGreen: 转换后的绿色通道值\r\nRed: 转换后的红色通道值",
    "inputSchema": {
        "type": "object",
        "properties": {
            "fromColorSpace": {
                "description": "源颜色空间，例如：LPVColorSpaceBGR（BGR颜色空间，通道顺序为B、G、R）、LPVColorSpaceHSV（HSV颜色空间，通道顺序为H、S、V）、LPVColorSpaceHLS（HLS颜色空间，通道顺序为H、L、S）、LPVColorSpaceYCrCb（YCrCb颜色空间，通道顺序为Y、Cr、Cb）、LPVColorSpaceYUV（YUV颜色空间，通道顺序为Y、U、V）、LPVColorSpaceXYZ（CIE 1931 XYZ颜色空间，通道顺序为X、Y、Z）、LPVColorSpaceLAB（CIE 1976 L*a*b*颜色空间，通道顺序为L、a*、b*）、LPVColorSpaceLUV（CIE 1976 L*u*v*颜色空间，通道顺序为L*、u*、v*）",
                "type": "string"
            },
            "toColorSpace": {
                "description": "目标颜色空间，例如：LPVColorSpaceBGR（BGR颜色空间，通道顺序为B、G、R）、LPVColorSpaceHSV（HSV颜色空间，通道顺序为H、S、V）、LPVColorSpaceHLS（HLS颜色空间，通道顺序为H、L、S）、LPVColorSpaceYCrCb（YCrCb颜色空间，通道顺序为Y、Cr、Cb）、LPVColorSpaceYUV（YUV颜色空间，通道顺序为Y、U、V）、LPVColorSpaceXYZ（CIE 1931 XYZ颜色空间，通道顺序为X、Y、Z）、LPVColorSpaceLAB（CIE 1976 L*a*b*颜色空间，通道顺序为L、a*、b*）、LPVColorSpaceLUV（CIE 1976 L*u*v*颜色空间，通道顺序为L*、u*、v*）",
                "type": "string"
            },
            "v0": {
                "description": "蓝色/H通道值，范围0-255",
                "type": "integer"
            },
            "v1": {
                "description": "绿色/S通道值，范围0-255",
                "type": "integer"
            },
            "v2": {
                "description": "红色/V通道值，范围0-255",
                "type": "integer"
            }
        },
        "required": [
            "fromColorSpace",
            "toColorSpace",
            "v0",
            "v1",
            "v2"
        ]
    }
}
```