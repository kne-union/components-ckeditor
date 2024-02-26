import icon from './icon.raw.svg';
const componentBoxUILoader = ({ core, ui }) => {
  const { Plugin } = core;
  const { addToolbarToDropdown, ButtonView, createDropdown, View } = ui;
  class PanelView extends View {
    constructor(locale, children) {
      super(locale);
      this.children = children;
      this.setTemplate({
        tag: 'div',
        attributes: {
          class: ['ck', 'ck-style-grid'],
          role: 'listbox'
        },

        children: this.children
      });
    }
  }

  class ComponentBoxUI extends Plugin {
    init() {
      const editor = this.editor;
      const t = editor.t;
      const componentBoxList = editor.config.get('componentBox')?.list || [];
      if (componentBoxList.length === 0) {
        return;
      }
      editor.ui.componentFactory.add('componentBox', local => {
        const enabledDropdown = createDropdown(local);
        enabledDropdown.buttonView.set({
          withText: false,
          label: t('ComponentBox'),
          icon,
          tooltip: true
        });
        const panelView = new PanelView(
          local,
          componentBoxList.map(({ type, name, defaultProps }) => {
            const buttonView = new ButtonView(local);
            buttonView.set({
              label: name,
              withText: true,
              tooltip: true
            });
            this.listenTo(buttonView, 'execute', () => {
              return editor.execute('insertComponentBox', { type, props: defaultProps || {} });
            });
            return buttonView;
          })
        );
        addToolbarToDropdown(enabledDropdown, [panelView]);
        return enabledDropdown;
      });
    }
  }

  return ComponentBoxUI;
};

export default componentBoxUILoader;
