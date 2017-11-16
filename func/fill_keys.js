//使用keys作为键，val作为值填充数组 
//
module.exports = ( keys_arr,val ) => {
     if(typeof keys_arr !='object' || !Array.isArray(keys_arr)) return false;
     var result = {};
     for(let k in keys_arr){
        if(typeof keys_arr[k] != 'string' && typeof keys_arr[k] != 'number') return false;
        result[keys_arr[k]] = val;
     }
     return result;
 }