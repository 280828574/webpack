import Vue from 'vue';
import Router from 'vue-router';

process.env.NODE_ENV !== 'production' && Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: (resolve) => {
            require.ensure(['~views/index'], (require) => {
                resolve(require('~views/index'));
            });
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }, {
        path: '*',
        redirect: '/'
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
});
