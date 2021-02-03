import InputNumber from './inputNumber';
import Input from './input';
// import Base from '../base';

/* istanbul ignore next */

Input.InputNumber = InputNumber;
Input.install = function(Vue) {
  Vue.component(Input.name, Input);
};

export default Input;
