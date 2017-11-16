//将数组的key转换成全大写或全小写

const _self = require("../const.js")

module.exports =  (arr, toCase = _self.CASE_LOWER) => {
    if(typeof arr !='object' || (toCase != _self.CASE_LOWER && toCase != _self.CASE_UPPER)) return false;
    var result = Array.isArray(arr) ? [] : {};
    for(let k in arr){
        var key = (toCase ==_self.CASE_LOWER) ? k.toLowerCase() : k.toUpperCase();
        result[key] = arr[k];
    }
    return result;
}