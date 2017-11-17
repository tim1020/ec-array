// 计算给定数组的数值总和

module.exports = ( arr ) => {
    if (typeof arr != 'object') return false;
    var sum = 0;
    for(let k in arr){
        let el = arr[k];
        val = parseFloat(el);
        if(!isNaN(val)) sum+= val;
    }
   return sum;
} 