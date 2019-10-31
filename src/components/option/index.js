import YnOption from '../select/option';

/* istanbul ignore next */
YnOption.install = function(Vue) {
  Vue.component(YnOption.name, YnOption);
};

export default YnOption;
