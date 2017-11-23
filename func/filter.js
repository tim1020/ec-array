//使用callback过滤arr 
//依次将 arr 数组中的每个键值传递到 callback 函数。如果 callback 函数返回 true，则该项会被包含在返回的结果数组中。数组的键名保留不变。 
//callback支持两种定义: 1 (value) => {}, 2 (key,value) => {}
module.exports = ( arr, callback ) => {
    if(typeof arr !='object' || typeof callback != 'function') return false;
    if(callback.length < 1 || callback.length > 2) return false;
    let result = Array.isArray(arr) ? arr.slice(0) : Object.assign({}, arr);;
    let i = 0;
    for(let k in arr){
        let keep = true;
        if (callback.length == 1){ //只有一个参数，仅对值处理
            keep = callback(arr[k]);
        } else{ //同时处理键、值
            keep = callback(k,arr[k]);
        }
        if(keep !== true) {
            if(Array.isArray(result)){
                result.splice(k-i,1);
                i++;
            } 
            else delete result[k];
        }
    }
    return result;
}