//返回 arr 数组中所有的值。

module.exports = ( arr ) => {
    if(typeof arr !='object' ) return false;
    var result = [];
    for(let k in arr){
        result.push(arr[k]);
    }
    return result;
}