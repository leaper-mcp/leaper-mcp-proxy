```json
{
    "name": "GetToolTree",
    "description": "获取工具节点和下一层子节点的工具名称的方法，每次调用仅获取一层子节点，主要用于列出某个模块的方法和获取所有方法列表。\n参数说明:\n- name: 要查询的节点名称，并根据name返回该节点及其下一层节点，不传则返回根节点和下一层结构。\n返回结构是一个序列化树状结构的json，其中- Name: 节点名称，root表示根节点，其他为具体的库名、类名或方法名 \r\n- Type: 节点类型，包含: root(根节点)、directory(库目录)、class(工具类)、tool(具体方法) \r\n- Belong: 父节点名称，标识该节点属于哪个上级节点 \r\n- Children: 子节点列表，仅包含该节点下的子项，不包含该节点的子节点的所有子项 \r\n",
    "inputSchema": {
        "title": "GetToolTree",
        "description": "获取工具节点和下一层子节点的工具名称的方法，每次调用仅获取一层子节点，主要用于列出某个模块的方法和获取所有方法列表。\n参数说明:\n- name: 要查询的节点名称，并根据name返回该节点及其下一层节点，不传则返回根节点和下一层结构。\n返回结构是一个序列化树状结构的json，其中- Name: 节点名称，root表示根节点，其他为具体的库名、类名或方法名 \r\n- Type: 节点类型，包含: root(根节点)、directory(库目录)、class(工具类)、tool(具体方法) \r\n- Belong: 父节点名称，标识该节点属于哪个上级节点 \r\n- Children: 子节点列表，仅包含该节点下的子项，不包含该节点的子节点的所有子项 \r\n",
        "type": "object",
        "properties": {
            "name": {
                "description": "要查询的节点名称，不传则返回根节点下面的下一层结构",
                "type": "string",
                "default": null
            }
        }
    }
}
```