//比较一个或多个数组与arr的差集，返回在arr而不在其它数组的元素
//val相同则认为相同

module.exports = ( arr, ...arrs ) => {
    if(typeof arr !='object') return false;
    let result = Array.isArray(arr) ? arr.slice(0) : Object.assign({}, arr);
    let i = 0;
    for(let k in arr){
       // console.log(result);
        for(let el of arrs){
            let found = false;
            for(let j in el){
                if(arr[k] == el[j]) {
                    if(Array.isArray(result)) result.splice(k-i,1);
                    else delete result[k];
                    found = true;
                    i++;
                    break;
                }
            }
            if(found) break;
        }
    }
    return result;
}