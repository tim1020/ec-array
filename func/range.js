//创建一个包含从start到end的整数数组,step为步长

module.exports = ( start, end , step = 1 ) => {
    //todo: 字符
    if(isNaN(start) || isNaN(end) || isNaN(step)) return false;
    var result = [];
    if(start <= end){ //递增
        for(let i=start;i<=end;i+= step){
            result.push(i);
        }
    }else{ //递减
        for(let i=start;i>=end;i-= step){
            result.push(i);
        }
    }
    return result;
}