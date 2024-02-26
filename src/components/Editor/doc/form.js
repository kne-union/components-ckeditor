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
