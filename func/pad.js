//使用val将arr填充至length长度, pos为填充位置，PAD_BEFORE为前方填充(缺省)，PAD_AFTER为后方填充,当arr原长度已大于等于length时直接返回f
var _self  = require("../const");
module.exports = ( arr , length , val , pos = _self.PAD_BEFORE) => {
    if(typeof arr !='object' || !Array.isArray(arr) || isNaN(length) ) return false;
    if(pos != _self.PAD_BEFORE && pos != _self.PAD_AFTER) return false;
    let result = arr.slice(0);
    if(length <= arr.length) return result;
    let nums = length - result.length;
    let pad = Array(nums).fill(val);
    (pos == _self.PAD_BEFORE) ? result.unshift(...pad) : result.push(...pad);
    return result;
}