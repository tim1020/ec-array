//返回二维数组中的指定的一列(column_key为要找的列，没有则返回null),index_key指定返回数组使用指定列的值为key

module.exports = ( arr , column_key , index_key = null ) => {
    if(typeof arr !='object' || !Array.isArray(arr)) return false;
    var result = index_key == null ? [] : {};
    for(let el of arr){
        if (typeof el != 'object') return false;
        var val = null;
        if(column_key in el) {
            val = el[column_key];
        }
        if(index_key != null && index_key in el){
            result[el[index_key]] = val;
        }else{
            result.push(val);
        }
    }
    return result;
}