import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';

process.env.NODE_ENV === 'development' && Vue.use(Router);

const router = new Router({
    routes
});

export default router;
