//将str以sep分隔成一个数组，如果设置了limit,则最多返回limit个元素 (limit为负数表示不限)

module.exports = ( str , sep="", limit = -1) => {
    if(typeof str !='string' || typeof sep != 'string') return false;
    return str.split(sep,limit);
}