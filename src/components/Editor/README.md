
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

- 在表单中使用
- 在表单中使用
- _Editor(@components/Editor),remoteLoader(@kne/remote-loader)

```jsx
const { default: CKEditor } = _Editor;
const { createWithRemoteLoader } = remoteLoader;
const BaseExample = createWithRemoteLoader({
    modules: ["components-core:FormInfo", "components-core:FormInfo@formModule"],
})(({ remoteModules }) => {
    const [FormInfo, formModule] = remoteModules;
    const { Form, SubmitButton } = formModule;
    return (
        <Form
            data={{
                des: '富文本内容',
            }}
            onSubmit={(data) => {
                console.log(data);
            }}
        >
            <FormInfo
                title="在表单中使用"
                column={1}
                list={[<CKEditor label="富文本" name="des" />]}
                rule="REQ"
            />
            <SubmitButton type="primary" block>
                提交
            </SubmitButton>
        </Form>
    );
});

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

