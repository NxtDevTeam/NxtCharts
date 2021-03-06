import Vue from 'vue';
import store from './store';

Vue.config.errorHandler = (err: any, vm: Vue, info: string) => {
  // Don't ask me why I use Vue.nextTick, it just a hack.
  // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
  Vue.nextTick(() => {
    store.dispatch('addErrorLog', {
      err,
      vm,
      info,
      url: window.location.href,
    });
  });
};
