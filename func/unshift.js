//将一个或多个元素插入到arr的开头


module.exports = ( arr , ...vals) => {
    if(typeof arr !='object' || !Array.isArray(arr) || vals.length <1) return false;
    arr.unshift(...vals);
    return arr;
}