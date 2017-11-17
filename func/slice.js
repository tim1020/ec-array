 //从arr中的offset开始取出length个元素，以新的数组返回。 当length为null或大于剩余长度时，返回offset后的全部
 
 module.exports = (arr, offset, length = null) => {
    if(typeof arr != 'object' || isNaN(offset) || offset < 0) return false;
    if(length != null && (isNaN(length) || length <1)) return false;
    let nums = Array.isArray(arr) ? arr.length : Object.getOwnPropertyNames(arr).length;
    if(offset > nums -1) return false;
    if (length == null) length = nums;
    if(Array.isArray(arr) ){
        return arr.slice(offset, offset+length);
    }else{
        let i = 0,count = 0;
        let result = {};
        for(let k in arr){
            if(i >= offset){
                result[k] = arr[k];
                count ++;
                if(count == length) break;
            }
            i++;
        }
        return result;
    }
 }