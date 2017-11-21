//使用一个或多个数组的值来替换arr的值（如果已存在进行替换，如果不存在则创建）
//只支持关联数组，有多个时，顺序替换

module.exports = ( arr, ...arrs ) => {
    if(typeof arr !='object' || Array.isArray(arr)) return false;
    for(let el of arrs){
        if(typeof el !='object' || Array.isArray(el)) return false;
        for(let k in el){
            arr[k] = el[k];
        }
    }
    return arr;
}