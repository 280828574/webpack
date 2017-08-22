import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = './api/';
// POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        let formdata = new FormData();
        for (let k in config.data) {
            formdata.append(k, config.data[k]);
        }
        config.data = formdata;
    }
    return config;
}, (error) => {
    console.log('错误的传参');
    return Promise.reject(error);
});
// code状态码200判断
axios.interceptors.response.use((res) => {
    if (Number(res.data.code) !== 200) {
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});
export default axios;
