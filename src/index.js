import {default as Button} from './components/Button';
import {default as Input} from './components/Input';

const components = [Button, Input];

const install = (app) => {
  components.forEach((component) => {
    app.use(component);
  });

  //   app.config.globalProperties.message = message

  return app;
};

export {Button, Input};
export default {
  install,
};
