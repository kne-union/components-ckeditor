
# OssUploadAdapterPlugin


### 概述

图片上传Oss适配器，Editor组件已经默认加载该适配器，不需要单独配置添加


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _Editor(@components/Editor),_OssUploadAdapterPlugin(@components/OssUploadAdapterPlugin)

```jsx
const {default: Editor} = _Editor;
const {useState} = React;
const BaseExample = () => {
    const [value, onChange] = useState("<p>请输入内容</p>");
    return <div>
        <Editor.Field value={value} onChange={onChange} config={{
            toolbar: {
                items: ['imageUpload']
            }
        }}/>
        <div>预览：</div>
        <Editor.Content value={value}/>
    </div>;
};

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

