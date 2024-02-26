import propsIcon from './props-icon.raw.svg';
import componentBoxUtilLoader from './componentBoxUtilLoader';

const componentBoxToolbarLoader = ({ core, ui, widget }) => {
  const { icons, Plugin } = core;
  const { BalloonPanelView, ButtonView, ContextualBalloon, createLabeledInputText, CssTransitionDisablerMixin, LabeledFieldView, LabelView, submitHandler, View } = ui;
  const { WidgetToolbarRepository } = widget;
  const ComponentBoxUtil = componentBoxUtilLoader({ core, ui, widget });

  function getBalloonPositionData(editor) {
    const editingView = editor.editing.view;
    const defaultPositions = BalloonPanelView.defaultPositions;
    const componentBoxUtil = editor.plugins.get('ComponentBoxUtil');

    return {
      target: editingView.domConverter.mapViewToDom(componentBoxUtil.getClosestSelectedWidget(editingView.document.selection)),
      positions: [
        defaultPositions.northArrowSouth,
        defaultPositions.northArrowSouthWest,
        defaultPositions.northArrowSouthEast,
        defaultPositions.southArrowNorth,
        defaultPositions.southArrowNorthWest,
        defaultPositions.southArrowNorthEast,
        defaultPositions.viewportStickyNorth
      ]
    };
  }

  function repositionContextualBalloon(editor) {
    const balloon = editor.plugins.get('ContextualBalloon');
    const componentBoxUtil = editor.plugins.get('ComponentBoxUtil');

    if (componentBoxUtil.getClosestSelectedWidget(editor.editing.view.document.selection)) {
      const position = getBalloonPositionData(editor);
      balloon.updatePosition(position);
    }
  }

  class ComponentBoxToolbarForm extends View {
    constructor(locale) {
      // Previously created elements.
      // ...
      super(locale);

      this.abbrInputView = this._createInput('Add abbreviation');
      this.titleInputView = this._createInput('Add title');

      this.saveButtonView = this._createButton('Save', icons.check, 'ck-button-save');
      this.saveButtonView.type = 'submit';

      this.cancelButtonView = this._createButton('Cancel', icons.cancel, 'ck-button-cancel');

      const label = new LabelView(locale);
      label.text = '组件属性';
      this.childViews = this.createCollection([label, this.abbrInputView, this.titleInputView, this.saveButtonView, this.cancelButtonView]);

      this.setTemplate({
        tag: 'form',
        attributes: {
          class: ['ck', 'ck-abbr-form'],
          tabindex: '-1'
        },
        children: this.childViews // ADDED
      });

      /*this.listenTo(this, 'submit', () => {
               // console.log('xxxxxx', this.abbrInputView.fieldView.value, this.titleInputView.fieldView.value);

                // this.editor.editing.view.focus();
            })*/
    }

    render() {
      super.render();
      submitHandler({
        view: this
      });
    }

    focus() {
      this.childViews.first.focus();
    }

    _createInput(label) {
      const labeledInput = new LabeledFieldView(this.locale, createLabeledInputText);

      labeledInput.label = label;

      return labeledInput;
    }

    _createButton(label, icon, className) {
      const button = new ButtonView();

      button.set({
        label,
        icon,
        tooltip: true,
        class: className
      });

      return button;
    }
  }

  class ComponentBoxToolbarUI extends Plugin {
    static get requires() {
      return [ComponentBoxToolbarForm, ContextualBalloon, ComponentBoxUtil];
    }

    static get pluginName() {
      return 'ComponentBoxToolbarUI';
    }

    get _isVisible() {
      return !!this._balloon && this._balloon.visibleView === this._form;
    }

    get _isInBalloon() {
      return !!this._balloon && this._balloon.hasView(this._form);
    }

    destroy() {
      super.destroy();
      if (this._form) {
        this._form.destroy();
      }
    }

    _createButton() {
      const editor = this.editor;
      const t = editor.t;

      editor.ui.componentFactory.add('componentBoxProps', locale => {
        const command = editor.commands.get('componentBoxProps');
        const view = new ButtonView(locale);

        view.set({
          label: t('属性设置'),
          icon: propsIcon,
          tooltip: true
        });

        //view.bind('isEnabled').to(command, 'isEnabled');
        //view.bind('isOn').to(command, 'value', value => !!value);

        this.listenTo(view, 'execute', () => {
          this._showForm();
        });

        return view;
      });
    }

    _createForm() {
      const editor = this.editor;
      const view = editor.editing.view;
      const viewDocument = view.document;
      const componentBoxUtil = editor.plugins.get('ComponentBoxUtil');
      this._balloon = this.editor.plugins.get('ContextualBalloon');
      this._form = new (CssTransitionDisablerMixin(ComponentBoxToolbarForm))(editor.locale);

      this._form.render();

      this.listenTo(this._form, 'submit', () => {
        this._hideForm(true);
      });

      this.listenTo(this._form, 'cancel', () => {
        this._hideForm(true);
      });

      console.log(view.keystrokes);

      /*this._form.keystrokes.set('Esc', (data, cancel) => {
                this._hideForm(true);
                cancel();
            });*/

      this.listenTo(editor.ui, 'update', () => {
        if (!componentBoxUtil.getClosestSelectedWidget(viewDocument.selection)) {
          this._hideForm(true);
        } else if (this._isVisible) {
          repositionContextualBalloon(editor);
        }
      });
    }

    _showForm() {
      if (this._isVisible) {
        return;
      }

      if (!this._form) {
        this._createForm();
      }

      const editor = this.editor;
      //const command = editor.commands.get('imageTextAlternative');
      //const labeledInput = this._form?.labeledInput;

      this._form.disableCssTransitions();

      if (!this._isInBalloon) {
        this._balloon?.add({
          view: this._form,
          position: getBalloonPositionData(editor)
        });
      }

      // Make sure that each time the panel shows up, the field remains in sync with the value of
      // the command. If the user typed in the input, then canceled the balloon (`labeledInput#value`
      // stays unaltered) and re-opened it without changing the value of the command, they would see the
      // old value instead of the actual value of the command.
      // https://github.com/ckeditor/ckeditor5-image/issues/114
      //labeledInput.fieldView.value = labeledInput.fieldView.element!.value = command.value || '';

      //this._form.labeledInput.fieldView.select();

      this._form.enableCssTransitions();
    }

    _hideForm(focusEditable = false) {
      if (!this._isInBalloon) {
        return;
      }

      if (this._form.focusTracker.isFocused) {
        this._form.saveButtonView.focus();
      }

      this._balloon.remove(this._form);

      if (focusEditable) {
        this.editor.editing.view.focus();
      }
    }

    init() {
      this._createButton();
    }
  }

  class ComponentBoxToolbar extends Plugin {
    static get pluginName() {
      return 'ComponentBoxToolbar';
    }

    static get requires() {
      return [ComponentBoxToolbarUI, ComponentBoxUtil];
    }

    afterInit() {
      const editor = this.editor;
      const componentBoxUtil = editor.plugins.get('ComponentBoxUtil');
      const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
      widgetToolbarRepository.register('componentBox', {
        items: ['componentBoxProps'],
        getRelatedElement: componentBoxUtil.getClosestSelectedWidget
      });
    }
  }

  return ComponentBoxToolbar;
};

export default componentBoxToolbarLoader;
