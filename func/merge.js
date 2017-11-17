//合并两个或多个数组

module.exports = ( arr, ...arrs ) => {
    if(typeof arr !='object' ) return false;
    for(let k in arrs){
        let el = arrs[k];
        if(typeof el !='object' ) return false;
        for(let k in el){
            if(Array.isArray(arr) && Array.isArray(el)) arr.push(el[k]);
            else arr[k] = el[k];
        }
    }
    return arr;
}