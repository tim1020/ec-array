//比较一个或多个数组与arr的交集，返回在arr中且在其它所有数组中都存在的元素
//val一样则认为相同

module.exports = ( arr, ...arrs ) => {
    if(typeof arr !='object') return false;
    let result = Array.isArray(arr) ? arr.slice(0) : arr;
    let i = 0;
    for(let k in arr){
        for(let el of arrs){
            let found = false;
            for(let j in el){
                if(arr[k] == el[j]) {
                    found = true;
                    break;
                }
            }
            if(!found) {
                if(Array.isArray(result)) result.splice(k-i,1);
                else delete result[k];
                i++;
                break;
            }
        }
    }
    return result;
}