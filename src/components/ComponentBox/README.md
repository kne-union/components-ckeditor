
# ComponentBox


### 概述

添加一个html组件到富文本编辑器


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _Editor(@components/Editor),_ComponentBox(@components/ComponentBox)

```jsx
const {default: Editor} = _Editor;
const {default: componentBoxLoader} = _ComponentBox;
const BaseExample = () => {
    return <Editor.Field pluginLoaders={[componentBoxLoader]} config={{
        toolbar: {
            items: ['componentBox']
        }, componentBox: {
            list: [{
                type: "Example1", name: "示例1", defaultProps: {
                    test: "111111",
                }, render: (dom, props) => {
                    dom.innerHTML = "<span>哈哈哈哈</span>";
                },
            }, {
                type: "Example2", name: "示例2", render: (dom, props) => {
                    dom.innerHTML = "<span>哈哈哈哈2222222</span>";
                },
            },],
        }
    }}/>;
};

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

