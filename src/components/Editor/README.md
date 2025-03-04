
# Editor


### 概述

富文本编辑器ckeditor的封装


### 示例(全屏)

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _Editor(@components/Editor),remoteLoader(@kne/remote-loader),_mockPreset(@root/mockPreset)

```jsx
const {default: Editor} = _Editor;
const {useState} = React;
const {createWithRemoteLoader} = remoteLoader;
const {default: preset} = _mockPreset;
const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Global@PureGlobal']
})(({remoteModules}) => {
    const [PureGlobal] = remoteModules;
    const [value, onChange] = useState("<p>请输入内容</p>");
    return <PureGlobal preset={preset}>
        <Editor.Field config={{language:'en'}} value={value} onChange={onChange}/>
        <div>预览：</div>
        <Editor.Content value={value}/>
    </PureGlobal>;
});

render(<BaseExample/>);

```

- 在表单中使用
- 在表单中使用
- _Editor(@components/Editor),remoteLoader(@kne/remote-loader),_mockPreset(@root/mockPreset)

```jsx
const {default: CKEditor} = _Editor;
const {createWithRemoteLoader} = remoteLoader;
const {default: preset} = _mockPreset;
const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Global@PureGlobal', "components-core:FormInfo", "components-core:FormInfo@formModule"],
})(({remoteModules}) => {
    const [PureGlobal, FormInfo, formModule] = remoteModules;
    const {Form, SubmitButton} = formModule;
    return (
        <PureGlobal preset={preset}>
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
                    list={[<CKEditor label="富文本" name="des"/>]}
                    rule="REQ"
                />
                <SubmitButton type="primary" block>
                    提交
                </SubmitButton>
            </Form>
        </PureGlobal>
    );
});

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

