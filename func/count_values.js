//统计数组中所有的值的出现次数
//返回一个数组， 键是 arr 里元素的值； 值是 arr 元素的值出现的次数
module.exports = ( arr ) => {
     if(typeof arr !='object' || !Array.isArray(arr)) return false;
     var result = {};
     for(let k in arr){
        if(typeof arr[k] != 'string' && typeof arr[k] != 'number') return false;
        if(arr[k] in result){
            result[arr[k]] += 1;
        }else{
            result[arr[k]] = 1;
        }
     }
     return result;
}