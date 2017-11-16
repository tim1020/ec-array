//返回二维数组中的指定的一列(column_key为要找的列，没有则返回null),index_key指定返回数组使用指定列的值为key

module.exports = ( arr , column_key , index_key = null ) => {
    if(typeof arr !='object' ) return false;
    var result = index_key == null ? [] : {};
    for(let k in arr){
        if (typeof arr[k] != 'object') return false;
        var val = null;
        if(column_key in arr[k]) {
            val = arr[k][column_key];
        }
        if(index_key != null && index_key in arr[k]){
            result[arr[k][index_key]] = val;
        }else{
            result.push(val);
        }
    }
    return result;
}