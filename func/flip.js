//返回一个反转后的 arr，例如 arr 中的键名变成了值，而 arr 中的值成了键名。
//
module.exports = ( arr) => {
    if(typeof arr !='object') return false;
    var result = {};
    for(let k in arr){
        var key = arr[k];
        if(typeof key != 'string' && typeof key != 'number') return false;
        result[key] = k;
    }
    return result;
}