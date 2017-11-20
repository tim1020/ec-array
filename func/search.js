//在arr中查找val，找到返回第一个命中的索引，找不到返回false
module.exports = (arr, val) => {
    if(typeof arr !='object' || (typeof val !="string" && typeof val !="number") ) return false;
    var result = false;
    for(let k in arr){
        if(arr[k] == val) return k;
    }
    return result;
}