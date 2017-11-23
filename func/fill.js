//用 num 个值为val的元素创建一个数组，idx由offset开始

module.exports = ( offset, num, val ) => {
    if(isNaN(offset) || isNaN(num) || offset< 0 || num <1) return false;
    return Array(offset+num).fill(val,offset);
} 