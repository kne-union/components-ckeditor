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
