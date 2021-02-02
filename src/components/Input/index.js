import InputNumber from './InputNumber';
import Input from './Input';
// import Base from '../base';

/* istanbul ignore next */

Input.InputNumber = InputNumber;
Input.install = function(Vue) {
  Vue.component(Input.name, Input);
};

export default Input;
