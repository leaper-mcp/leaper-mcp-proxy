```json
{
    "name": "ILBlobAnalysisColor",
    "description": "This interface provide functionalities of blob analysis. 该接口提供斑点分析的功能。\r\nBlob analysis is a useful approach to segment object from background into connected components of similar grayscale values. 斑点分析是机器视觉系统中常见的前景目标分割方法，用于从背景中提取灰度值近似的连通域生成斑点对象。\r\nVarious geometric features, such as area, perimeter or circularity, can be computed on these blobs. 再计算斑点对象的属性特征，典型的几何特征如面积、轮廓周长、圆度等，图像特征如平均亮度、对比度等。\r\nThis is a color-mode blob analysis tool. 这个是彩色斑点分析工具。\r\n返回结构是一个序列化的json，其中Preview属性是输入图像在当前斑点分析配置下的二值化蒙版的图片地址，\r\nBuild 为斑点分析结果，其中的Count表示斑点的数量，Item是所有斑点的集合，\r\n每一个斑点的: GetCenter 表示斑点的重心坐标;\r\nCountContour 表示斑点的外轮廓个数；\r\nCountHole 表示斑点的孔洞个数；\r\nGetRect 表示斑点的包围矩形； \r\nGetRotRect 表示斑点的包围旋转矩形； \r\nGetFeature是斑点的其他属性，包括：LPVBlobArea表示斑点面积、LPVBlobCenterX和LPVBlobCenterY表示斑点中心点的坐标;\r\nToRegion 表示根据该斑点的轮廓蒙版，生成一个蒙版区域对象；\r\nLpvClassName 表示调用工具函数的名称；\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称",
    "inputSchema": {
        "title": "ILBlobAnalysisColor",
        "description": "This interface provide functionalities of blob analysis. 该接口提供斑点分析的功能。\r\nBlob analysis is a useful approach to segment object from background into connected components of similar grayscale values. 斑点分析是机器视觉系统中常见的前景目标分割方法，用于从背景中提取灰度值近似的连通域生成斑点对象。\r\nVarious geometric features, such as area, perimeter or circularity, can be computed on these blobs. 再计算斑点对象的属性特征，典型的几何特征如面积、轮廓周长、圆度等，图像特征如平均亮度、对比度等。\r\nThis is a color-mode blob analysis tool. 这个是彩色斑点分析工具。\r\n返回结构是一个序列化的json，其中Preview属性是输入图像在当前斑点分析配置下的二值化蒙版的图片地址，\r\nBuild 为斑点分析结果，其中的Count表示斑点的数量，Item是所有斑点的集合，\r\n每一个斑点的: GetCenter 表示斑点的重心坐标;\r\nCountContour 表示斑点的外轮廓个数；\r\nCountHole 表示斑点的孔洞个数；\r\nGetRect 表示斑点的包围矩形； \r\nGetRotRect 表示斑点的包围旋转矩形； \r\nGetFeature是斑点的其他属性，包括：LPVBlobArea表示斑点面积、LPVBlobCenterX和LPVBlobCenterY表示斑点中心点的坐标;\r\nToRegion 表示根据该斑点的轮廓蒙版，生成一个蒙版区域对象；\r\nLpvClassName 表示调用工具函数的名称；\r\nInputParameterFile 表示调用工具函数需要传入的参数文件名称",
        "type": "object",
        "properties": {
            "imageUrl": {
                "description": "图片的url地址，通过这个地址获取到图片",
                "type": "string"
            },
            "paramsInfo": {
                "description": "工具的参数配置，传入一个序列化的json字符串，属性包括：AddBlobFilter（过滤器）、AddBlobRangeColor（斑点对象的彩色值范围)AddBlobFilter 有一个属性：SetFilterFeature，过滤条件在这里设置，值为一个对象。SetFilterFeature 对象的键为 LPVBlobArea、LPVBlobPerimeter、LPVBlobWidth、LPVBlobHeight、LPVBlobCircularity、LPVBlobConvexity、LPVBlobInertia、LPVBlobAspectRatio、LPVBlobSharpness、LPVBlobLuminance、LPVBlobContrast、LPVBlobCenterX、LPVBlobCenterY、LPVBlobColorV0、LPVBlobColorV1、LPVBlobColorV2 其中的任意一个，每个键具体含义为：LPVBlobArea 斑点的面积，LPVBlobPerimeter 斑点外轮廓的周长，LPVBlobWidth 斑点的旋转包围盒的长轴长度 ，LPVBlobHeight 斑点的旋转包围盒的短轴长度，LPVBlobCircularity 斑点的圆度形状特征，LPVBlobConvexity 斑点的凸度形状属性，LPVBlobInertia 斑点轮廓的惯性矩，LPVBlobAspectRatio 斑点的包围旋转矩形的长宽比，LPVBlobSharpness 斑点内像素的清晰度，LPVBlobLuminance 斑点内像素的平均亮度，LPVBlobContrast 斑点内像素的平均对比度，LPVBlobCenterX 斑点中心点的 x 坐标 ，LPVBlobCenterY  斑点中心点的 y 坐标 ，LPVBlobColorV0 斑点内像素的平均 0 通道值，LPVBlobColorV1 斑点内像素的平均 1 通道值，LPVBlobColorV2 斑点内像素的平均 2 通道值。值全部都是 LowerBound 和 UpperBound，其中 LowerBound 为下限，UpperBound为上限，例如：周长最小2000，最大为6000，转换为：LPVBlobPerimete:{LowerBound:2000,UpperBound:6000}。AddBlobRangeColor 有六个属性：分别对应红色、绿色、蓝色通道的最小值和最大值（RedMin, RedMax, GreenMin, GreenMax, BlueMin, BlueMax），值为0到255之间的整数举例：用户输入 “过滤面积最小为2000，最大为100000；周长最小2000，最大为6000；红色通道范围0到44，绿色2到44，蓝色0到44”，需要转换为：{\"AddBlobFilter\":{\"SetFilterFeature\":{\"LPVBlobArea\":{\"LowerBound\":2000,\"UpperBound\":100000},\"LPVBlobPerimeter\":{\"LowerBound\":2000,\"UpperBound\":6000}}},\"AddBlobRangeColor\":{\"RedMin\":0,\"RedMax\":44,\"GreenMin\":2,\"GreenMax\":44,\"BlueMin\":0,\"BlueMax\":44}}",
                "type": "string"
            },
            "RoiILRegion": {
                "description": "指定的Roi区域。如果用户没有指定区域，请直接传入 \"null\"。 如果用户指定区域，传入一个序列化的JSON字符串，属性包括：LpvClassName(调用工具函数的名称) 和 InputParameterFile(调用工具函数需要传入的参数文件名称)。这两个属性的值可以从前处理的MCP工具的返回值中获取。LpvClassName 表示要调用的Region接口名称，根据不同的区域类型有不同的接口名称，可选的名称有：ILAnnulusRegion (圆环区域对象)、ILAnnulusSectorRegion(环状扇形区域对象)、ILCircleRegion (圆形区域对象)、ILCompoundRegion (复合区域对象)、ILEllipseRegion (椭圆区域对象)、ILMaskRegion (蒙版区域对象)、ILPolyRegion (多边形区域对象)、ILRectRegion (矩形区域对象)、ILRotRectRegion (旋转矩形区域对象);InputParameterFile 表示调用工具函数需要传入的参数文件名称。",
                "type": "string"
            }
        },
        "required": [
            "imageUrl",
            "paramsInfo",
            "RoiILRegion"
        ]
    }
}
```