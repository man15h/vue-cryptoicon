import Cryptoicon from './Cryptoicon.vue';

export default {
  install(Vue, options) {
    Vue.component(Cryptoicon.name, Cryptoicon);
    Vue.mixin({
      beforeCreate() {
        if (options.size) {
          if (isNaN(options.size) || options.size < 0) {
            console.error('Size must be integer');
          } else {
            Cryptoicon.props.size.default = options.size;
          }
        }
        if (options.color) {
          Cryptoicon.props.color.default = options.color;
        }
      }
    });
  },
  add(icons) {
    Cryptoicon.add(icons);
  }
};

export { Cryptoicon };
