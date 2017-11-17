//array tool kit
"use strict";
//consts
const _consts      = require("./const.js")
//functions
var 
    changeKeyCase = require("./func/change_key_case"),
    chunk         = require("./func/chunk"),
    column        = require("./func/column"),
    combine       = require("./func/combine"),
    countValues   = require("./func/count_values"),
    count         = require("./func/count"),
    fillKeys      = require("./func/fill_keys"),
    fill          = require("./func/fill"),
    flip          = require("./func/flip"),
    values        = require("./func/values"),
    keys          = require("./func/keys"),
    keyExists     = require("./func/key_exists"),
    merge         = require("./func/merge"),
    range         = require("./func/range"),
    shuffle       = require("./func/shuffle"),
    sum           = require("./func/sum"),
    splice        = require("./func/splice"),
    slice         = require("./func/slice"),
    shift         = require("./func/shift"),  
    unshift       = require("./func/unshift"), 
    push          = require("./func/push"), 
    pop           = require("./func/pop"), 
    product       = require("./func/product"), 
    pad           = require("./func/pad"), 
    reverse       = require("./func/reverse"),
    rand          = require("./func/rand")


//export
var funcs = {
   changeKeyCase,
   chunk,
   column,
   combine,
   countValues,
   count,
   fillKeys,
   fill,
   flip,
   values,
   keys,
   keyExists,
   merge,
   range,
   shuffle,
   sum,
   splice,
   slice,
   shift,
   unshift,
   push,
   product,
   pop,
   pad,
   reverse,
   rand
};
//export consts
for(let k in _consts){
    funcs[k]= _consts[k];
}
funcs.consts = _consts;

module.exports = Object.freeze(funcs);

    

    // array_​diff_​assoc
    // array_​diff_​key
    // array_​diff_​uassoc
    // array_​diff_​ukey
    // array_​diff
    // array_​filter
    // array_​intersect_​assoc
    // array_​intersect_​key
    // array_​intersect_​uassoc
    // array_​intersect_​ukey
    // array_​intersect
    // array_​map
    // array_​merge_​recursive
    // array_​multisort
    // array_​reduce
    // array_​replace_​recursive
    // array_​replace
    // array_​search
    // array_​udiff_​assoc
    // array_​udiff_​uassoc
    // array_​udiff
    // array_​uintersect_​assoc
    // array_​uintersect_​uassoc
    // array_​uintersect
    // array_​unique
    // array_​walk_​recursive
    // array_​walk
    // arsort
    // asort
    // compact
    // current
    // each
    // end
    // extract
    // in_​array
    // key
    // krsort
    // ksort
    // list
    // natcasesort
    // natsort
    // next
    // pos
    // prev
    // reset
    // rsort
    // sort
    // uasort
    // uksort
    // usort