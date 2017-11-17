//把 arr 中由 offset 和 length 指定的单元去掉，如果提供了 replacement 参数，则用replacement取代被去掉的元素。
//
module.exports = ( arr,offset,length = 1, ...replacement) => {
    if(typeof arr != 'object' || isNaN(offset) || isNaN(length) || offset > arr.length -1 || !Array.isArray(arr)) return false;
    arr.splice(offset,length,...replacement);
    return arr;
}