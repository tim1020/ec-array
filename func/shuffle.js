//打乱数组 

module.exports = ( arr ) => {
    if(typeof arr !='object'  || !Array.isArray(arr)) return false;
    var result = [], random;
    while(arr.length>0){
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}