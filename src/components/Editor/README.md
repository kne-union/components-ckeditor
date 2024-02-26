
# Editor


### 概述

富文本编辑器ckeditor的封装


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _Editor(@components/Editor)

```jsx
const {default: Editor} = _Editor;
const { useState } = React;
const BaseExample = () => {
    const [value, onChange] = useState("<p>请输入内容</p>");
    return <div>
        <Editor.Field value={value} onChange={onChange}/>
        <div>预览：</div>
        <Editor.Content value={value}/>
    </div>;
};

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

