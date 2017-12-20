import axios from './axios';

/**
 * axios实现get
 * @param {*Object} conf axios的config
 */
const get = async (url, params) => {
    return await axios({
        method: 'get',
        url: url,
        params: params
    }).then(res => {
        res.data.success = true;
        return res.data;
    }).catch(err => {
        err.data || (err.data = {});
        if (err.data.msg) {
            console.log('getError =>', err.data.msg);
        } else {
            console.log('getError =>', err);
            err.data.msg = '系统错误！';
        }
        err.data.success = false;
        return err.data;
    });
};

/**
 * axios实现post
 * @param {*Object} conf axios的config
 */
const post = async (url, data) => {
    return await axios({
        method: 'post',
        url: url,
        data: data
    }).then(res => {
        res.data.success = true;
        return res.data;
    }).catch(err => {
        err.data || (err.data = {});
        if (err.data.msg) {
            console.log('postError =>', err.data.msg);
        } else {
            console.log('postError =>', err);
            err.data.msg = '系统错误！';
        }
        err.data.success = false;
        return err.data;
    });
};

export default {
    get,
    post
};
