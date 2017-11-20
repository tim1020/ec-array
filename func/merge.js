//合并两个或多个数组

module.exports = ( arr, ...arrs ) => {
    if(typeof arr !='object' ) return false;
    let result = arr;
    for(let el of arrs){
        if(typeof el !='object' ) return false;
        for(let k in el){
            if(Array.isArray(arr) && Array.isArray(el)) result.push(el[k]);
            else result[k] = el[k];
        }
    }
    return result;
}