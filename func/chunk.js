//将数组arr分割成多点个，每个数组的元素个数由size决定，最后一个的元素可能会少于size个 
module.exports =  ( arr , size) => {
    if(typeof arr !='object' || isNaN(size) || size <=0) return false;
    var result = [];
    var nums = 0;
    for(let k in arr){
        if(nums == 0){
            var slice = Array.isArray(arr) ? [] : {};
        } 
        if( Array.isArray(arr)) slice.push(arr[k]);
        else slice[k] = arr[k];
        if(++nums == size){ 
            result.push(slice);
            nums = 0;
        }
    }
    if(nums>0){
        result.push(slice);
    }
    return result;
}