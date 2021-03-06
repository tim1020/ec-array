//使用keys作为键，val作为值填充数组 
//
module.exports = ( keys_arr,val ) => {
     if(typeof keys_arr !='object' || !Array.isArray(keys_arr)) return false;
     var result = {};
     for(let el of keys_arr){
        if(typeof el != 'string' && typeof el != 'number') return false;
        result[el] = val;
     }
     return result;
 }