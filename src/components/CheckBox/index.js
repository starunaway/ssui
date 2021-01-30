import CheckBox from './checkbox';
import CheckButton from './checkButton';

CheckBox.CheckButton = CheckButton;
/* istanbul ignore next */
CheckBox.install = function(Vue) {
  Vue.component(CheckBox.name, CheckBox);
};

export default CheckBox;
