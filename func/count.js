//返回数组单元数目或对象属性个数 ,recursive为true时递归计算

module.exports = ( arr , recursive = false) => {
    if(typeof arr != 'object') return fasle;
    if(!recursive) return Array.isArray(arr) ? arr.length : Object.getOwnPropertyNames(arr).length;
    else{
        var s = {num:0};
        count(arr,s);
        return s.num;
    }
}
//递归
var count = (arr, s) =>{
    for(let k in arr){
        if(typeof arr[k] == 'object') count(arr[k],s);
        else s.num ++;
    }
}