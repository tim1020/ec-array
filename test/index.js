//test ec-router
const req     = require('supertest')
const assert  = require('assert')
const _   = require("../index")


describe('ec-arr', () => {
    describe('changeKeyCase',() => {
        let arr = {a:1,B:2};
        it('case_lower', () => {
            let result = _.changeKeyCase(arr,_.CASE_LOWER);
            assert.deepEqual(result, {a:1,b:2})
        });
        it('case_upper', () => {
            let result = _.changeKeyCase(arr,_.CASE_UPPER);
            assert.deepEqual(result, {A:1,B:2})
        });
        it('idx_arr', () => {
            let result = _.changeKeyCase([1,2,3],_.CASE_LOWER);
            assert.deepEqual(result,[1,2,3])
        });
    });
    describe('chunk',() => {
        let arr1 = [1,2,3,4,5];
        let arr2 = {a:1,b:2,c:3,d:4,e:5};
        it('chunk by 2', () => {
            assert.deepEqual(_.chunk(arr1,2), [[1,2],[3,4],[5]])
        });
        it('chunk by 3', () => {
            assert.deepEqual(_.chunk(arr1,3), [[1,2,3],[4,5]])
        });
        it('chunk assoc arr by 3', () => {
            assert.deepEqual(_.chunk(arr2,3), [{a:1,b:2,c:3},{d:4,e:5}])
        });
    });
    describe('column',() => {
        let arr = [
            {k:"a",name:"aaa"},
            {k:"b",name:"bbb",age:1}
        ];
        it('column_exist', () => {
            assert.deepEqual(_.column(arr,"name"), ["aaa","bbb"])
        });
        it('column_not_exist', () => {
            assert.deepEqual(_.column(arr,"age"), [1])
        });
        it('column_not_exist_all', () => {
            assert.deepEqual(_.column(arr,"name1"), [])
        });
        it('with_key', () => {
            assert.deepEqual(_.column(arr,"name","k"), {a:"aaa",b:"bbb"})
        });
    });
    describe('combine',() => {
        let k = ["a","b","c"];
        let v = ["a1","b1","c1"];
        let j = ["a11","b11"];
        it('nums_match', () => {
            assert.deepEqual(_.combine(k,v), {a:"a1",b:"b1",c:"c1"});
        });
        it('key_more', () => {
            assert.deepEqual(_.combine(k,j), {a:"a11",b:"b11",c:null});
        });
        it('key_less', () => {
            assert.deepEqual(_.combine(j,k), {a11:"a",b11:"b"});
        });
    });
    describe('count',() => {
        let arr1 = ["a","b","c"];
        let arr2 = {a:1,b:2};
        let arr3 = ["a","b",{c:1,d:2}];
        it('idx_arr', () => {
            assert.equal(_.count(arr1), 3);
        });
        it('assoc_arr', () => {
            assert.equal(_.count(arr2), 2);
        });
        it('recursive_false', () => {
            assert.equal(_.count(arr3), 3);
        });
        it('recursive_true', () => {
            assert.equal(_.count(arr3,true), 4);
        });
    });
    describe('countValues',() => {
        let arr1 = ["a","b","c","a","a","b"];
        let arr2 = [1,2,3,1,2];

        it('string', () => {
            assert.deepEqual(_.countValues(arr1),{a:3,b:2,c:1});
        });
        it('number', () => {
            assert.deepEqual(_.countValues(arr2), {1:2,2:2,3:1});
        });
    });
    describe('diff',() => {
        let arr1 = {a:1,b:2,c:3};
        let arr2 = {a:1,b:3,c:4};
        let arr3 = {b:4,c:3};

        it('arrs=1', () => {
            assert.deepEqual(_.diff(arr1,arr2), {b:2,c:3});
        });
        it('arrs>1', () => {
            assert.deepEqual(_.diff(arr1,arr2,arr3), {b:2});
        });
    });
    describe('diffKey',() => {
        let arr1 = {a:1,b:2,c:3,d:4,e:5};
        let arr2 = {a:2,b:3,c:4};
        let arr3 = {b:4,c:3,e:6};

        it('arrs=1', () => {
            assert.deepEqual(_.diffKey(arr1,arr2), {d:4,e:5});
        });
        it('arrs>1', () => {
            assert.deepEqual(_.diffKey(arr1,arr2,arr3), {d:4});
        });
    });
    describe('diffVal',() => {
        let arr1 = [1,2,3];
        let arr2 = [3,4,5];
        let arr3 = [1,5,6];
        let arr4 = {a:1,b:2};
        let arr5 = {b:1,c:22};
        it('idx_arrs=1', () => {
            assert.deepEqual(_.diffVal(arr1,arr2), [1,2]);
        });
        it('idx_arrs>1', () => {
            assert.deepEqual(_.diffVal(arr1,arr2,arr3), [2]);
        });
        it('assoc_arrs=1', () => {
            assert.deepEqual(_.diffVal(arr4,arr5), {b:2});
        });
    });
    describe('fill',() => {
        it('idx from 0', () => {
            assert.deepEqual(_.fill(0,3,"a"), ["a","a","a"]);
        });
        it('idx from 1', () => {
            assert.deepEqual(_.fill(1,2,"a"), [,"a","a"]);
        });
    });
    describe('fillKeys',() => {
        let k1 = [1];
        let k2 = ["a","b","c"];
        it('on number key', () => {
            assert.deepEqual(_.fillKeys(k1,"a"), {1:"a"});
        });
        it('some string key', () => {
            assert.deepEqual(_.fillKeys(k2,"b"), {a:"b",b:"b",c:"b"});
        });
    });
    describe('filter',() => {
        let arr1 = [1,2,3,4,5]
        let arr2 = {a:1,b:2,c:3,d:4,e:5}
        let cb1 = (val) => {
            return val>3 ; //过滤掉值不大于3的元素
        }
        let cb2 = (key,val) => {
            return key=="a" || val == 4; //保留key=a或值val=4的
        }
        it('by val', () => {
            assert.deepEqual(_.filter(arr1,cb1), [4,5]);
        });
        it('by key,val', () => {
            assert.deepEqual(_.filter(arr2,cb2), {a:1,d:4});
        });
    });
    describe('flip',() => {
        let arr1 = {a:"a1",b:"b1"}
        let arr2 = {a:1}
        let arr3 = {a:[]}
        it('normal', () => {
            assert.deepEqual(_.flip(arr1), {a1:"a",b1:"b"});
        });
        it('number val', () => {
            assert.deepEqual(_.flip(arr2), {1:"a"});
        });
        it('object val,return false', () => {
            assert.equal(_.flip(arr3), false);
        });
    });
    describe('intersect',() => {
        let arr1 = {a:1,b:2,c:3}
        let arr2 = {a:1,b:2,c:4}
        let arr3 = {a:2,b:2,c:5}
        it('arrs=1', () => {
            assert.deepEqual(_.intersect(arr1,arr2), {a:1,b:2});
        });
        it('arrs>1', () => {
            assert.deepEqual(_.intersect(arr1,arr2,arr3), {b:2});
        });
    });
    describe('intersectKey',() => {
        let arr1 = {a:1,b:2,c:3}
        let arr2 = {a:2,b:3,c:4}
        let arr3 = {a:2,b:2}
        it('arrs=1', () => {
            assert.deepEqual(_.intersectKey(arr1,arr2), {a:1,b:2,c:3});
        });
        it('arrs>1', () => {
            assert.deepEqual(_.intersectKey(arr1,arr2,arr3), {a:1,b:2});
        });
    });
    describe('intersectVal',() => {
        let arr1 = [1,2,3];
        let arr2 = [1,3,4,5];
        let arr3 = [1,5,6];
        let arr4 = {a:1,b:2};
        let arr5 = {b:1,c:22};
        it('idx_arrs=1', () => {
            assert.deepEqual(_.intersectVal(arr1,arr2), [1,3]);
        });
        it('idx_arrs>1', () => {
            assert.deepEqual(_.intersectVal(arr1,arr2,arr3), [1]);
        });
        it('assoc_arrs=1', () => {
            assert.deepEqual(_.intersectVal(arr4,arr5), {a:1});
        });
    });
    describe('join',() => {
        let arr1 = ["a","b","c"];
        let arr2 = {a:"a1",b:"b1",c:"c1"};
        it('default sep', () => {
            assert.equal(_.join(arr1), "abc");
        });
        it('set sep', () => {
            assert.equal(_.join(arr1,"-"), "a-b-c");
        });
        it('assoc_arrs', () => {
            assert.equal(_.join(arr2," "), "a1 b1 c1");
        });
    });
    describe('keyExists',() => {
        let arr1 = ["a","b","c"];
        let arr2 = {a:"a1",b:"b1",c:"c1"};
        it('idx_exists', () => {
            assert.equal(_.keyExists(arr1,0), true);
        });
        it('idx_not_exists', () => {
            assert.equal(_.keyExists(arr1,4), false);
        });
        it('assoc_exists', () => {
            assert.equal(_.keyExists(arr2,"a"), true);
        });
        it('assoc_not_exists', () => {
            assert.equal(_.keyExists(arr2,"a1"), false);
        });
    });
    describe('keys',() => {
        let arr1 = {a:1,b:1,c:2};
        it('all', () => {
            assert.deepEqual(_.keys(arr1), ["a","b","c"]);
        });
        it('val=xx', () => {
            assert.deepEqual(_.keys(arr1,1), ["a","b"]);
        });
    });
    describe('merge',() => {
        let arr1 = [1,2]
        let arr2 = [2,3]
        let arr3 = {a:1,b:1}
        let arr4 = {a:2,c:3}
        let arr5 = {a:3,c:4}
        it('idx', () => {
            assert.deepEqual(_.merge(arr1,arr2), [1,2,2,3]);
        });
        it('assoc_arrs=1', () => {
            assert.deepEqual(_.merge(arr3,arr4),{a:2,b:1,c:3});
        });
        it('assoc_arrs>1', () => {
            assert.deepEqual(_.merge(arr3,arr4,arr5),{a:3,b:1,c:4});
        });
    });
    describe('pad',() => {
        let arr1 = [1,2]
        it('pad nothing', () => {
            assert.deepEqual(_.pad(arr1,2,"a"), [1,2]);
        });
        it('pad defult', () => {
            assert.deepEqual(_.pad(arr1,3,"a"), ["a",1,2]);
        });
        it('pad before', () => {
            assert.deepEqual(_.pad(arr1,4,"a",_.PAD_BEFORE), ["a","a",1,2]);
        });
         it('pad after', () => {
            assert.deepEqual(_.pad(arr1,5,"a",_.PAD_AFTER), [1,2,"a","a","a"]);
        });
    });
    describe('pop',() => {
        let arr1 = [1,2]
        it('pop one', () => {
            assert.equal(_.pop(arr1), 2);
        });
        it('pop again', () => {
            assert.equal(_.pop(arr1),1);
        });
        it('pop empty', () => {
            assert.equal(_.pop(arr1), null);
        });
    });
    describe('product',() => {
        let arr1 = [2,3,4];
        let arr2 = [2,3,"3.5"]
        let arr3 = [2,"a",3,"3.5","b"]

        it('all number', () => {
            assert.equal(_.product(arr1), 2*3*4);
        });
        it('with string number', () => {
            assert.equal(_.product(arr2),2*3*3.5);
        });
        it('mix(string,float,NaN)', () => {
            assert.equal(_.product(arr3), 2*3*3.5);
        });
    });
    describe('push',() => {
        let arr1 = [1,2];
        it('push one', () => {
            assert.deepEqual(_.push(arr1,3), [1,2,3]);
        });
        it('push more', () => {
            assert.deepEqual(_.push(arr1,4,5),[1,2,3,4,5]);
        });
    });
    describe('range',() => {
        it('default step', () => {
            assert.deepEqual(_.range(1,5), [1,2,3,4,5]);
        });
        it('step=2', () => {
            assert.deepEqual(_.range(1,5,2),[1,3,5]);
        });
        it('decre,step=3', () => {
            assert.deepEqual(_.range(5,1,3),[5,2]);
        });
    });
    describe('reverse',() => {
        let arr1 = [1,2,3]
        let arr2 = {a:1,b:2,c:3}
        it('idx', () => {
            assert.deepEqual(_.reverse(arr1), [3,2,1]);
        });
        it('assoc', () => {
            assert.deepEqual(_.reverse(arr2),{c:3,b:2,a:1});
        });
    });
    describe('replace',() => {
        let arr1 = {a:1,b:2}
        let arr2 = {b:3,c:4}
        let arr3 = {b:4,e:5}
        it('arrs=1', () => {
            assert.deepEqual(_.replace(arr1,arr2), {a:1,b:3,c:4});
        });
        it('arrs>1', () => {
            assert.deepEqual(_.replace(arr1,arr2,arr3), {a:1,b:4,c:4,e:5});
        });
    });
    describe('search',() => {
        let arr1 = [1,2,1];
        let arr2 = {a:1,b:2};
        it('idx', () => {
            assert.equal(_.search(arr1,2), 1);
        });
        it('idx_0', () => {
            assert.equal(_.search(arr1,1), 0);
        });
        it('idx_null', () => {
            assert.equal(_.search(arr1,3), false);
        });
         it('assoc_ok', () => {
            assert.equal(_.search(arr2,1), "a");
        });
        it('assoc_null', () => {
            assert.equal(_.search(arr2,3), false);
        });
    });
    describe('shift',() => {
        let arr1 = [1,2];
        let arr2 = {a:1,b:1};
        it('shift one', () => {
            assert.equal(_.shift(arr1), 1);
        });
        it('shift again', () => {
            assert.equal(_.shift(arr1), 2);
        });
        it('assoc', () => {
            assert.equal(_.shift(arr2), 1);
        });
    });
    describe('slice',() => {
        let arr1 = [1,2,3,4];
        let arr2 = {a:1,b:2,c:3};
        it('default length', () => {
            assert.deepEqual(_.slice(arr1,1), [2,3,4]);
        });
        it('length over', () => {
            assert.deepEqual(_.slice(arr1,1,5), [2,3,4]);
        });
        it('assoc', () => {
            assert.deepEqual(_.slice(arr2,1,1), {b:2});
        });
    });
    describe('sort',() => {
        let arr1 = [1,3,5,4,8];
        let arr2 = {a:2,b:1,d:4,c:5};
        it('idx default(val asc)', () => {
            assert.deepEqual(_.sort(arr1), [1,3,4,5,8]);
        });
        it('idx val desc', () => {
            assert.deepEqual(_.sort(arr1, _.SORT_VAL_DESC), [8,5,4,3,1]);
        });
        it('idx key asc', () => {
            assert.deepEqual(_.sort(arr1, _.SORT_KEY_ASC), [1,3,5,4,8]);
        });
        it('idx key desc', () => {
            assert.deepEqual(_.sort(arr1, _.SORT_KEY_DESC), [8,4,5,3,1]);
        });

        it('assoc default(val asc)', () => {
            assert.deepEqual(_.sort(arr2, _.SORT_VAL_ASC), {b:1,a:2,d:4,c:5});
        });
        it('assoc val desc', () => {
            assert.deepEqual(_.sort(arr2, _.SORT_VAL_DESC), {c:5,d:4,a:2,b:1});
        });
        it('assoc key asc', () => {
            assert.deepEqual(_.sort(arr2, _.SORT_KEY_ASC), {a:2,b:1,c:5,d:4});
        });
        it('assoc key desc', () => {
            assert.deepEqual(_.sort(arr2, _.SORT_KEY_DESC), {d:4,c:5,b:1,a:2});
        });
        
    });
    describe('splice',() => {
        let arr1 = [1,2,3,4];
        let arr2 = [1,2,3,4];
        let arr3 = [1,2,3,4];
        it('default', () => {
            assert.deepEqual(_.splice(arr1,2), [1,2,4]);
        });
        it('by length', () => {
            assert.deepEqual(_.splice(arr2,1,2), [1,4]);
        });
        it('replace', () => {
            assert.deepEqual(_.splice(arr3,1,2,"a"), [1,"a",4]);
        });
    });
    describe('split',() => {
        let str1 = "a-b-c-d-e";
        it('default', () => {
            assert.deepEqual(_.split(str1), ["a","-","b","-","c","-","d","-","e"]);
        });
        it('set sep', () => {
            assert.deepEqual(_.split(str1,"-"),["a","b","c","d","e"]);
        });
        it('set sep and limit', () => {
            assert.deepEqual(_.split(str1,"-",2), ["a","b"]);
        });
    });
    describe('sum',() => {
        let arr1 = [2,3,4];
        let arr2 = [2,3,"3.5"]
        let arr3 = [2,"a",3,"3.5","b"]

        it('all number', () => {
            assert.equal(_.sum(arr1), 2+3+4);
        });
        it('with string number', () => {
            assert.equal(_.sum(arr2),2+3+3.5);
        });
        it('mix(string,float,NaN)', () => {
            assert.equal(_.sum(arr3), 2+3+3.5);
        });
    });
    describe('unique',() => {
        let arr1 = [1,1,2,3,3]
        let arr2 = {a:1,b:1,c:2,d:3,e:2}

        it('idx', () => {
            assert.deepEqual(_.unique(arr1), [1,2,3]);
        });
        it('assoc', () => {
            assert.deepEqual(_.unique(arr2), {a:1,c:2,d:3});
        });
    });
    describe('unshift',() => {
        let arr1 = [1,2];
        let arr2 = {a:1,b:1};
        it('unshift one', () => {
            assert.deepEqual(_.unshift(arr1,1), [1,1,2]);
        });
        it('unshift again', () => {
            assert.deepEqual(_.unshift(arr1,2,3), [2,3,1,1,2]);
        });
    });

    describe('values',() => {
        let arr1 = [1,2,3]
        let arr2 = {a:1,b:2,c:3}
        it('idx', () => {
            assert.deepEqual(_.values(arr1), [1,2,3]);
        });
        it('assoc', () => {
            assert.deepEqual(_.values(arr1),[1,2,3]);
        });

    });
})
