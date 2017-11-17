//反转数组的顺序
//
module.exports = ( arr ) => {
    if (typeof arr != 'object') return false;
    let keys = [] , vals = [];
    for(let k in arr){
        keys.unshift(k);
        vals.unshift(arr[k]);
    }
    if(Array.isArray(arr)) return vals;
    else{
        var result = {};
        for(let i = 0; i < keys.length;i++){
            result[keys[i]] = vals[i];
        }
        return result;
    }
} 