// 从数组中随机取出一个或多个元素,返回选中的key，如果num=1直接返回key，如果num>1返回包括所有选中key的数组，num多作arr元素数时，返回全部（随机顺序）

module.exports = ( arr , num = 1 ) => {
    if (isNaN(num) || num <1 || typeof arr != 'object') return false;
    var keys = [];
    for(let k in arr){
        keys.push(Array.isArray(arr) ? parseInt(k) : k);
    }
    var found = 0,result = [];
    while(found < num && keys.length>0){
        random = Math.floor(Math.random() * keys.length);
        result.push(keys[random]);
        found ++;
        keys.splice(random, 1);
    }
    if(num == 1) return result[0];
    else return result;
} 