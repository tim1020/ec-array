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
    fillKeys      = require("./func/fill_keys"),
    fill          = require("./func/fill"),
    flip          = require("./func/flip"),
    values        = require("./func/values"),
    rand          = require("./func/rand")


//export
var funcs = {
   changeKeyCase,
   chunk,
   column,
   combine,
   countValues,
   fillKeys,
   fill,
   flip,
   values,
   rand
};
//export consts
for(let k in _consts){
    funcs[k]= _consts[k];
}
funcs.consts = _consts;

module.exports = Object.freeze(funcs);