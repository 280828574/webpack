const base = [{
    path: '/',
    component: (resolve) => {
        require.ensure(['~views/index'], (require) => {
            resolve(require('~views/index'));
        });
    }
}, {
    path: '*',
    redirect: '/'
}];

export default base;
