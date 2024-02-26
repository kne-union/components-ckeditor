const componentBoxEditingLoader = ({ core, widget }) => {
  const { Command, Plugin } = core;
  const { toWidget, Widget } = widget;

  class InsertProductPreviewCommand extends Command {
    execute({ type, props }) {
      this.editor.model.change(writer => {
        this.editor.model.insertContent(
          writer.createElement('componentBox', {
            'data-type': type,
            'data-props': props
          })
        );
      });
    }

    refresh() {
      const model = this.editor.model;
      const selection = model.document.selection;
      const allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'componentBox');

      this.isEnabled = allowedIn !== null;
    }
  }

  class ComponentBoxEditing extends Plugin {
    static get requires() {
      return [Widget];
    }

    init() {
      this._defineSchema();
      this._defineConverters();

      this.editor.commands.add('insertComponentBox', new InsertProductPreviewCommand(this.editor));
    }

    _defineSchema() {
      const schema = this.editor.model.schema;

      schema.register('componentBox', {
        inheritAllFrom: '$blockObject',
        allowAttributes: ['data-type', 'data-props']
      });
    }

    _defineConverters() {
      const editor = this.editor;
      const conversion = editor.conversion;
      const componentBoxList = editor.config.get('componentBox')?.list || [];

      conversion.for('upcast').elementToElement({
        model: (viewElement, { writer }) => {
          const props = viewElement.getAttribute('data-props'),
            type = viewElement.getAttribute('data-type');
          return writer.createElement('componentBox', {
            'data-type': type,
            'data-props': props
          });
        },
        view: {
          name: 'section',
          classes: 'component-box'
        }
      });

      const createSection = (modelElement, { writer }) => {
        const type = modelElement.getAttribute('data-type'),
          props = modelElement.getAttribute('data-props');
        const section = writer.createContainerElement('section', {
          class: 'component-box',
          'data-type': type,
          'data-props': JSON.stringify(props)
        });

        const componentWrapper = writer.createRawElement(
          'div',
          {
            class: 'component-box-wrapper'
          },
          element => {
            componentBoxList.find(item => item.type === type)?.['render']?.(element, props);
          }
        );

        writer.insert(writer.createPositionAt(section, 0), componentWrapper);
        return section;
      };

      conversion.for('dataDowncast').elementToElement({
        model: 'componentBox',
        view: (modelElement, { writer }) => createSection(modelElement, { writer })
      });

      conversion.for('editingDowncast').elementToElement({
        model: 'componentBox',
        view: (modelElement, { writer }) => {
          const section = createSection(modelElement, { writer });
          return toWidget(section, writer, { label: 'component box widget', hasSelectionHandle: true });
        }
      });
    }
  }

  return ComponentBoxEditing;
};

export default componentBoxEditingLoader;
