//判断key是否在arr中

module.exports = ( arr, key) => {
    if(typeof arr !='object') return false;
    return (key in arr);
}