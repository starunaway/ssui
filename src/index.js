import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Icon from './components/Icon';
import Input from './components/Input';

const components = [Button, CheckBox, Icon, Input];

const install = (app) => {
  components.forEach((component) => {
    app.use(component);
  });

  //   app.config.globalProperties.message = message

  return app;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {Button, CheckBox, Icon, Input};

export default {
  version: process.env.VERSION,
  install,
};
