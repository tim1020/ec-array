//比较一个或多个数组与arr的差集，返回在arr而不在其它数组的元素
//只作用于关联数组，key,val均相同才认为相同

module.exports = ( arr, ...arrs ) => {
    if(typeof arr !='object' || Array.isArray(arr)) return false;
    let result = Object.assign({}, arr);
    for(let k in arr){
        for(let el of arrs){
            if((k in el) && (arr[k] == el[k])) {                
                delete result[k];
                break;
            }
        }
    }
    return result;
}