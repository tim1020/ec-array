//将一个或多个元素压入arr 
module.exports = ( arr , ...vals) => {
    if(typeof arr !='object' || !Array.isArray(arr) || vals.length < 1) return false;
    arr.push(...vals);
    return arr.slice(0);
}