import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';

process.env.NODE_ENV !== 'production' && Vue.use(Router);

const router = new Router({
    {{#prerender}}
    mode: process.env.NODE_ENV === 'prerender' ? 'history' : 'hash',
    {{/prerender}}
    routes
});

export default router;
