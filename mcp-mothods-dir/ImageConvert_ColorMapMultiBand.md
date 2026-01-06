```json
{
    "name": "ImageConvert_ColorMapMultiBand",
    "description": "Apply color map of multiple bands on the given image, to generate a pseudo color image for data visualization\r\n对输入图像应用多周期的颜色映射表，生成一张伪彩图，通常用于进行数据可视化\r\n- Apply color map of multiple bands on the given image, to generate a pseudo color image for data visualization\r\n- The input image can be any depth\r\n- The output image will be a color 8-bit image\r\n- Optionally invert the colormap and normalize the input image before applying colormap\r\n- Pass in empty range (0, 0) for minValue/maxValue to use the minimum/maximum of current image\r\n- Band count defaults to 3\r\n- 对输入图像应用多周期的颜色映射表，生成一张伪彩图，通常用于进行数据可视化\r\n- 输入图像可以是任意位深\r\n- 输出图像将是彩色 8 位图\r\n- 可选择是否使用反向的颜色映射表，以及对输入图像进行归一化处理\r\n- 对于minValue/maxValue，传入空范围 (0, 0) 表示使用当前图像的最小值和最大值\r\n- 颜色映射表的周期数，默认为3\r\n\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
    "inputSchema": {
        "title": "ImageConvert_ColorMapMultiBand",
        "description": "Apply color map of multiple bands on the given image, to generate a pseudo color image for data visualization\r\n对输入图像应用多周期的颜色映射表，生成一张伪彩图，通常用于进行数据可视化\r\n- Apply color map of multiple bands on the given image, to generate a pseudo color image for data visualization\r\n- The input image can be any depth\r\n- The output image will be a color 8-bit image\r\n- Optionally invert the colormap and normalize the input image before applying colormap\r\n- Pass in empty range (0, 0) for minValue/maxValue to use the minimum/maximum of current image\r\n- Band count defaults to 3\r\n- 对输入图像应用多周期的颜色映射表，生成一张伪彩图，通常用于进行数据可视化\r\n- 输入图像可以是任意位深\r\n- 输出图像将是彩色 8 位图\r\n- 可选择是否使用反向的颜色映射表，以及对输入图像进行归一化处理\r\n- 对于minValue/maxValue，传入空范围 (0, 0) 表示使用当前图像的最小值和最大值\r\n- 颜色映射表的周期数，默认为3\r\n\r\n返回结构是一个序列化的JSON字符串，包含以下字段：\r\nResultImg: 输出结果图像URL地址",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到输入图像",
                "type": "string"
            },
            "colorMapType": {
                "description": "颜色映射表类型，例如：LPVColorMapAutumn,LPVColorMapBone,LPVColorMapJet,LPVColorMapWinter,LPVColorMapRainbow,LPVColorMapOcean,LPVColorMapSummer,LPVColorMapSpring,LPVColorMapCool,LPVColorMapHSV,LPVColorMapPink,LPVColorMapHot,LPVColorMapParula,LPVColorMapMagma,LPVColorMapInferno,LPVColorMapPlasma,LPVColorMapViridis,LPVColorMapCividis,LPVColorMapTwilight,LPVColorMapTwilightShifted,LPVColorMapTurbo,LPVColorMapDeepgreen,LPVColorMapSemi,LPVColorMapRed,LPVColorMapGreen,LPVColorMapBlue",
                "type": "string"
            },
            "inverse": {
                "description": "是否反向映射",
                "type": "boolean",
                "default": false
            },
            "normalize": {
                "description": "是否归一化",
                "type": "boolean",
                "default": false
            },
            "minValue": {
                "description": "最小值",
                "type": "number",
                "default": 0
            },
            "maxValue": {
                "description": "最大值",
                "type": "number",
                "default": 0
            },
            "bandCount": {
                "description": "颜色映射表的周期数，默认为3",
                "type": "integer",
                "default": 3
            }
        },
        "required": [
            "imageUrl",
            "colorMapType"
        ]
    }
}
```