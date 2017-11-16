//用 value 参数的值将一个数组填充 num 个条目，键名由 start_index 参数指定的开始

module.exports = ( start_index, num, val ) => {
    if(isNaN(start_index) || isNaN(num) || start_index<0 || num <1) return false;
    var result = [];
    for(let i=0;i<num;i++){
        result[start_index++] = val;
    }
    return result;
} 