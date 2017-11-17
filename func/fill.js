//将一个数组填充 num 个值为val的元素，key由offset开始

module.exports = ( offset, num, val ) => {
    if(isNaN(offset) || isNaN(num) || offset< 0 || num <1) return false;
    return Array(offset+num).fill(val,offset);
} 