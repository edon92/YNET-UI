import YnMenuItem from '../menu/menu-item';

/* istanbul ignore next */
YnMenuItem.install = function(Vue) {
  Vue.component(YnMenuItem.name, YnMenuItem);
};

export default YnMenuItem;
