//依次将 arr 数组中的每个元素使用callback函数处理。
//callback支持两种定义: 1 (value) => {}, 2 (key,value) => {}
module.exports = ( arr, callback ) => {
    if(typeof arr !='object' || typeof callback != 'function') return false;
    if(callback.length < 1 || callback.length > 2) return false;
    for(let k in arr){
        if (callback.length == 1){ //只有一个参数，仅对值处理
            arr[k] = callback(arr[k]);
        } else{ //同时处理键、值
            arr[k] = callback(k,arr[k]);
        }
    }
    return arr;
}