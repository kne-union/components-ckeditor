const { default: Editor } = _Editor;
const { default: componentBoxLoader } = _ComponentBox;
const BaseExample = () => {
  return (
    <Editor.Field
      pluginLoaders={[componentBoxLoader]}
      config={{
        toolbar: {
          items: ['componentBox']
        },
        componentBox: {
          list: [
            {
              type: 'Example1',
              name: '示例1',
              defaultProps: {
                test: '111111'
              },
              render: (dom, props) => {
                dom.innerHTML = '<span>哈哈哈哈</span>';
              }
            },
            {
              type: 'Example2',
              name: '示例2',
              render: (dom, props) => {
                dom.innerHTML = '<span>哈哈哈哈2222222</span>';
              }
            }
          ]
        }
      }}
    />
  );
};

render(<BaseExample />);
