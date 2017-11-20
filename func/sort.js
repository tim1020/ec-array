//数组排序(unicode比较)
//sflat为排序方式，默认为按key正序
//

var _self = require("../const");
module.exports = (arr,sflag = _self.SORT_VAL_ASC) => {
    if(typeof arr !="object" || (sflag !=  _self.SORT_KEY_ASC && sflag !=  _self.SORT_KEY_DESC && sflag !=  _self.SORT_VAL_ASC && sflag !=  _self.SORT_VAL_DESC )) return false;
    if(Array.isArray(arr)){ //普通数组
        for(let el of arr){
            if(typeof el !="string" && typeof el !="number") return false;
        }
        let result = arr.slice(0);
        if(sflag == _self.SORT_KEY_ASC) { //原样
        }else if(sflag == _self.SORT_VAL_ASC){
            result.sort();
        }else{
            let tmp = result;
            result = [];
            if(sflag == _self.SORT_VAL_DESC){
                tmp.sort();
            }
            for(let el of tmp){
                result.unshift(el);
            } 
        }
        return result;
    }else{ //关联数组
        let keys = [];
        let tmp = {};
        let result = {};
        for(let k in arr){
            if(sflag == _self.SORT_KEY_ASC || sflag == _self.SORT_KEY_DESC){ //按key排序
                 keys.push(k);
            }else{
                if(typeof arr[k] == 'object') return false; //不能处理多维
                keys.push(arr[k]);
                tmp[arr[k]] = k;
            }
        }
        keys.sort();
        //排序后重组，保持对应
        let sIdx = 0;
        let eIdx = keys.length;
        let step = 1;
        if(sflag == _self.SORT_KEY_DESC || sflag == _self.SORT_VAL_DESC){ //降序，调整一下
            sIdx = keys.length - 1;
            eIdx = step = -1;
        }
        for(let i = sIdx; i!=eIdx;i+=step){
            let idx = keys[i]; 
            if(tmp[idx] != null){ 
                idx = tmp[idx];
            }
            result[idx] = arr[idx];
        }
        return result;
    }
}