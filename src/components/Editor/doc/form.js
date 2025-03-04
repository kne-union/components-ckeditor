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
