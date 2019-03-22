import Cryptoicon from './Cryptoicon.vue';

export default {
  install(Vue, options) {
    Vue.component(Cryptoicon.name, Cryptoicon);
    Vue.mixin({
      beforeCreate() {
        if (options && options.size) {
          if (isNaN(options.size) || options.size < 0) {
            console.error('Size must be integer');
          } else {
            Cryptoicon.props.size.default = options.size;
          }
        }
        if (options && options.color) {
          Cryptoicon.props.color.default = options.color;
        }
        if (options && options.generic) {
          Cryptoicon.props.generic.default = options.generic;
        }
      }
    });
  },
  add(icons) {
    Cryptoicon.add(icons);
  }
};

export { Cryptoicon };
