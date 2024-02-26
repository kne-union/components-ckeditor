const { default: Editor } = _Editor;
const { useState } = React;
const BaseExample = () => {
  const [value, onChange] = useState('<p>请输入内容</p>');
  return (
    <div>
      <Editor.Field
        value={value}
        onChange={onChange}
        config={{
          toolbar: {
            items: ['imageUpload']
          }
        }}
      />
      <div>预览：</div>
      <Editor.Content value={value} />
    </div>
  );
};

render(<BaseExample />);
