//弹出arr最后一个元素并返回，多个时返回数组
 
module.exports = ( arr ) => {
    if(typeof arr !='object' || !Array.isArray(arr)) return false;
    return arr.pop();
}