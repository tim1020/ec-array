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
    diff          = require("./func/diff"),
    diffKey       = require("./func/diff_key"),
    diffVal       = require("./func/diff_val"),
    fillKeys      = require("./func/fill_keys"),
    fill          = require("./func/fill"),
    flip          = require("./func/flip"),
    filter        = require("./func/filter"),
    intersect     = require("./func/intersect"),
    intersectKey  = require("./func/intersect_key"),
    intersectVal  = require("./func/intersect_val"),
    join          = require("./func/join"),
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
    rand          = require("./func/rand"),
    replace       = require("./func/replace"),
    search        = require("./func/search"),
    sort          = require("./func/sort"),
    split         = require("./func/split"),    
    unique        = require("./func/unique"),
    values        = require("./func/values"),
    walk          = require("./func/walk")
;
//export
var funcs = {
  changeKeyCase,
  chunk,
  column,
  combine,
  countValues,
  count,
  diff,
  diffKey,
  diffVal,
  fillKeys,
  fill,
  flip,
  filter,
  intersect,
  intersectKey,
  intersectVal,
  join,
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
  rand,
  replace,
  search,
  sort,
  split,
  unique,
  values,
  walk
};
//export consts
for(let k in _consts){
    funcs[k]= _consts[k];
}
funcs.consts = _consts;

module.exports = Object.freeze(funcs);

   
// compact
// current
// each
// end
// key
// list
// next
// pos
// prev
// reset
// extract
// 
// array_​diff_​uassoc
// array_​diff_​ukey
// array_​udiff_​assoc
// array_​udiff_​uassoc
// array_​udiff
// array_​intersect_​uassoc
// array_​intersect_​ukey
// array_​uintersect_​assoc
// array_​uintersect_​uassoc
// array_​uintersect