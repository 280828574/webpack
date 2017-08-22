{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
{{#mobile}}
import FastClick from 'fastclick';
{{/mobile}}
{{#router}}
import router from '~router';
{{/router}}
{{#store}}
import store from '~store';
{{/store}}
import '~styles';
import App from './App';

{{#mobile}}
FastClick.attach(document.body);
{{/mobile}}
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#store}}
  store,
  {{/store}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
});
