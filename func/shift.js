//将 arr 的第一个单元移出并作为结果返回，同时arr长度减小，索引重排 
//
module.exports = ( arr) => {
    if(typeof arr != 'object') return false;
    if(Array.isArray(arr)) return arr.shift();
    else{
        var result;
        for(let k in arr){
            if(result == null) {
                result = arr[k];
                delete arr[k];
                break;
            }
        }
        return result;
    }
}