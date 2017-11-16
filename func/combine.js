//创建一个数组，用keys_arr的值作为其键名，vals_arr的值作为其值 
//如果keys的数量少于vals的数量，多出的忽略，如果keys数量多于vals数量，多出的值设为null
//keys元素值必须为string
module.exports = ( keys_arr , vals_arr) => {
    if(typeof keys_arr !='object' || !Array.isArray(keys_arr) || typeof vals_arr !='object' || !Array.isArray(vals_arr)) return false;
    var result = {};
    for(let k in keys_arr){
        if(typeof keys_arr[k] != 'string' ) return false;
        var val = null;
        if (k < vals_arr.length){
            val = vals_arr[k];
        }
        result[keys_arr[k]] = val;
    }
    return result;
}