import axios from './axios';

/**
 * axios实现fetch
 * @param {*Object} conf axios的config
 * @param {*Function} cb 成功响应处理函数
 * @return {*Promise}
 */
export const fetch = (conf) => (cb) => {
    return axios(conf).then(res => {
        cb(res.data.data);
    }).catch(err => {
        console.log(err);
    });
};

/**
 * axios实现post
 * @param {*Object} conf axios的config
 * @param {*Function} cb 成功响应处理函数
 * @param {*Function} errCb 失败响应处理函数
 * @return {*Promise}
 */
export const post = (conf) => (cb) => (errCb) => {
    return axios(conf).then(res => {
        cb(res.data.data);
    }).catch(err => {
        console.log(err);
        errCb();
    });
};
