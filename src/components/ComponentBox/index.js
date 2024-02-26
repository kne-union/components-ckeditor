import componentBoxEditingLoader from './componentBoxEditingLoader';
import componentBoxUILoader from './componentBoxUILoader';
import componentBoxToolbarLoader from './componentBoxToolbarLoader';

const componentBoxLoader = libs => {
  const { core } = libs;
  const { Plugin } = core;
  const ComponentBoxUI = componentBoxUILoader(libs),
    ComponentBoxEditing = componentBoxEditingLoader(libs),
    ComponentBoxToolbar = componentBoxToolbarLoader(libs);
  return class ComponentBox extends Plugin {
    static get pluginName() {
      return 'ComponentBox';
    }

    static get requires() {
      return [ComponentBoxUI, ComponentBoxEditing, ComponentBoxToolbar];
    }
  };
};

export default componentBoxLoader;
