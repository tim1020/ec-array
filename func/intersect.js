//比较一个或多个数组与arr的交集，返回arr中且在所有其它数组中都存在的元素
//只作用于关联数组，key,val均相同才认为相同

module.exports = ( arr, ...arrs ) => {
    if(typeof arr !='object' || Array.isArray(arr)) return false;
    let result = Object.assign({}, arr);
    for(let k in arr){
        for(let el of arrs){
            if(el[k] == undefined || (arr[k] != el[k])) {
                delete result[k];
                break;
            }
        }
    }
    return result;
}