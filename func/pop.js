//弹出arr最后一个元素并返回
 
module.exports = ( arr ) => {
    if(typeof arr !='object' || !Array.isArray(arr)) return false;
    return arr.pop();
}