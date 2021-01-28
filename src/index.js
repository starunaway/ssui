import Button from './components/Button';
import Icon from './components/Icon';

// import Input from './components/Input';

const components = [Button, Icon];

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

export {Button, Icon};

export default {
  version: process.env.VERSION,
  install,
};
