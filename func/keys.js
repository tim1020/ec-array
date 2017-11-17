//返回 arr 数组中所有的key。如果指定了val，则只返回值为val的key

module.exports = ( arr, val = null ) => {
    if(typeof arr !='object' ) return false;
    var result = [];
    for(let k in arr){
        if(val == null || arr[k] == val){
            result.push(k);
        }
    }
    return result;
}