//将一个数组的所有元素连接成字符串,如果是关联数组，则以数组的值进行连接
module.exports = ( arr , sep="") => {
    if(typeof arr !='object' || typeof sep != 'string') return false;
    if(Array.isArray(arr)) return arr.join(sep);
    else{
        let result = [];
        for(k in arr){
            if(typeof arr[k] =='object') return false;
            result.push(arr[k]);
        }
        return result.join(sep);
    }
}