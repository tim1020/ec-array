//合并两个或多个数组

module.exports = ( arr, ...arrs ) => {
    if(typeof arr !='object' ) return false;
    let result = Array.isArray(arr) ? arr.slice(0): Object.assign({}, arr);
    for(let el of arrs){
        if(typeof el !='object' ) return false;
        for(let k in el){
            if(Array.isArray(result) && Array.isArray(el)) result.push(el[k]);
            else result[k] = el[k];
        }
    }
    return result;
}