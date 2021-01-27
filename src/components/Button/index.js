import Button from './button';
import Base from '../base';

/* istanbul ignore next */
Button.install = function (Vue) {
  Vue.use(Base);
  Vue.component(Button.name, Button);
};

export default Button;
