//比较一个或多个数组与arr的交集，返回在arr中且同时在所有其它数组中都存在的元素
//只作用于关联数组，key相同则认为相同

module.exports = ( arr, ...arrs ) => {
    if(typeof arr !='object' || Array.isArray(arr)) return false;
    let result = Object.assign({}, arr);
    for(let k in arr){
        for(let el of arrs){
            if(!(k in el)) {
                delete result[k];
                break;
            }
        }
    }
    return result;
}