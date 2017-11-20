//移除arr的重复值后返回 

module.exports = (arr) => {
    if(typeof arr !='object' ) return false;
    if(Array.isArray(arr)){
        return arr.filter(function (x, i, a) { 
            return a.indexOf(x) == i; 
        });
    }else{
        var result = {};
        var vals = {};
        for(let k in arr){
            var val = arr[k];
            if(typeof val == 'object') return false;
            if(val in vals){
                continue;
            }
            result[k] = val;
            vals[val] = 1;
        }
        return result;
    }
}