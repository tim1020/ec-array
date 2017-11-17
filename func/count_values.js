//统计数组中所有的值的出现次数
//返回一个数组， 键是 arr 里元素的值； 值是 arr 元素的值出现的次数
module.exports = ( arr ) => {
     if(typeof arr !='object' || !Array.isArray(arr)) return false;
     var result = {};
     for(let k in arr){
        let el = arr[k];
        if(typeof el != 'string' && typeof el != 'number') return false;
        if(el in result){
            result[el] += 1;
        }else{
            result[el] = 1;
        }
     }
     return result;
}