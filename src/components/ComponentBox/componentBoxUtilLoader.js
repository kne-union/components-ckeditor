const componentBoxUtilLoader = ({ core }) => {
  const { Plugin } = core;
  return class ComponentBoxUtil extends Plugin {
    static get pluginName() {
      return 'ComponentBoxUtil';
    }

    getClosestSelectedWidget = selection => {
      const editor = this.editor;
      const mapper = editor.editing.mapper;
      const selectionPosition = selection.getFirstPosition();

      if (!selectionPosition) {
        return null;
      }

      const viewElement = selection.getSelectedElement();

      if (viewElement && mapper.toModelElement(viewElement).name === 'componentBox') {
        return viewElement;
      }

      return null;
    };
  };
};

export default componentBoxUtilLoader;
