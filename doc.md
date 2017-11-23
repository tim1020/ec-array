ec-array API文档
-----------------

## 常量

**CASE_LOWER**: 用于函数changeKeyCase，指定转换成小写

**CASE_UPPER**: 用于函数changeKeyCase，指定转换成大写

**PAD_BEFORE**: 用于函数pad，指定在前方填充

**PAD_AFTER**:  用于函数pad，指定在前方填充

**SORT_VAL_ASC**: 用于函数sort，指定排序方式为按值升序

**SORT_VAL_DESC**: 用于函数sort，指定排序方式为按值降序

**SORT_KEY_ASC**: 用于函数sort，指定排序方式为按KEY升序

**SORT_KEY_DESC**:  用于函数sort，指定排序方式为按key降序

## 约定

1. 如果函数不能正确处理，例如参数不合法等错误,返回false。
2. 对于 a = [] 称为数组或数字下标数组，a = {k:v}称为关联数组,部份函数只能单独处理数字下标数组或关联数组，部份函数可以同时兼容这两种类型

## 使用方式

```
let ecArr = require("ec-array")
let arr   = {a:1,B:1}
let re    = ecArr.changeKeyCase(arr,ecArr.CASE_LOWER)
```


## 函数列表

### changeKeyCase(arr,case = CASE_LOWER)

将arr的key转换成全大写或全小写,case缺省时转换为小写。如果arr为数字下标数组，则不会有作用。

```
let arr = {a:1,B:1};
let re = ecArr.changeKeyCase(arr,ecArr.CASE_LOWER); //{a:1,b:1}
```

### chunk(arr,size)
将arr分割成多点个，每个数组的元素个数由size决定，最后一个的元素可能会少于size个 

```
let arr1 = [1,2,3,4,5];
let arr2 = {a:1,b:2,c:3,d:4,e:5};
let re1 = ecArr.chunk(arr1,2); //[[1,2],[3,4],[5]]
let re2 = ecArr.chunk(arr2,2); //[{a:1,b:2},{c:3,d:4},{e:5}]
```

### column(arr,column_key,index_key = null)
返回二维数组arr(第一维为数字下标，第二维需为关联数组)中的指定的一列(column_key为要找的列，没有则返回null)
使用index_key指定返回数组使用指定列的值为key，未指定时使用数字下标返回

```
let arr = [
    {k:"a",name:"aaa"},
    {k:"b",name:"bbb"}
];
let re1 = ecArr.column(arr,"name"); // ["aaa","bbb"]
let re2 = ecArr.column(arr,"name","id"); //{a:"aaa",b:"bbb"}

```

### ​combine(keys_arr,vals_arr)
创建一个数组，用keys_arr的值作为其键名，vals_arr的值作为其值 
如果keys的数量少于vals的数量，多出的忽略，如果keys数量多于vals数量，多出的值设为null

keys_arr和vals_arr都是数字下标数组，keys_arr元素值必须为string

```
let k = ["a","b","c"]
let v = ["a1","b1","c1"]
let re = ecArr.combine(k,v); //{a:"a1",b:"b1"}
```


### count(arr,recursive = false)
统计arr的元素数目(或对象属性个数) ,recursive为true时递归计算

```
let arr1 = ["a","b","c"];
let arr2 = {a:1,b:2};
let arr3 = ["a","b",{c:1,d:2}];
let re = ecArr.count(arr1); // 3
let re = ecArr.count(arr2); // 2
let re = ecArr.count(arr3); // 3
let re = ecArr.count(arr3,true); // 4
```

### ​countValues(arr)
统计数组中所有的值的出现次数,返回一个数组， 键是 arr 里元素的值； 值是 arr 元素的值出现的次数

```
let arr = ["a","b","a","c"];
let re = ecArr.countValues(arr); //{a:2,b:1,c:1}
```

### diff(arr, ...arrs)
比较一个或多个数组与arr的差集，返回在arr而不在其它数组的元素,只作用于关联数组，key,val均相同才认为相同,
如果有多个数组比较，必须在其它所有数组中全部不在才算差集

```
let arr1 = {a:1,b:2,c:3};
let arr2 = {a:1,b:3,c:4};
let arr3 = {b:4,c:3};
let re1 = ecArr.diff(arr1,arr2);  //{b:2,c:3}
let re2 = ecArr.diff(arr1,arr2,arr3); //{b:2}
```

### diffKey(arr,...arrs)
比较一个或多个数组与arr的差集，返回在arr而不在其它数组的元素,只作用于关联数组

只比较key，key一样则认为相同

```
let arr1 = {a:1,b:2,c:3,d:4,e:5};
let arr2 = {a:2,b:3,c:4};
let arr3 = {b:4,c:3,e:6};
let re1 = ecArr.diffKey(arr1,arr2);  //{d:4,e:5}
let re2 = ecArr.diffKey(arr1,arr2,arr3); //{d:4}
```

### diffVal(arr,...arrs)
比较一个或多个数组与arr的差集，返回在arr而不在其它数组的元素, val相同则认为相同

```
let arr1 = [1,2,3];
let arr2 = [3,4,5];
let arr3 = [1,5,6];
let arr4 = {a:1,b:2};
let arr5 = {b:1,c:22};
let re1 = ecArr.diffVal(arr1,arr2);  //[1,2]
let re2 = ecArr.diffVal(arr1,arr2,arr3); //[2]
let re3 = ecArr.diffVal(arr4,arr5); //{b:2}
```

### ​fill(offset, num, val)
用 num 个值为val的元素创建一个数组，下标由offset开始

```
let re1 = ecArr.fill(0,3,"a"); //["a","a","a"]
let re2 = ecArr.fill(1,2,"a"); //[<1 empty item>,"a","a"]
```

### ​fillkeys(keys_arr,val)
创建一个数组，使用keys_arr的每个元素作为键，val作为值 

```
let k = ["a","b","c"]
let re = ecArr.fillKey(k,1); //{a:1,b:1,c:1}
```

### filter(arr,callback)
使用回调函数callback过滤arr中的元素

依次将 arr 数组中的每个键值传递到 callback 函数。如果 callback 函数返回false，则该项会被去掉。

callback支持两种定义: 1 (value) => {}, 2 (key,value) => {}

```
let arr1 = [1,2,3,4,5]
let arr2 = {a:1,b:2,c:3,d:4,e:5}
let cb1 = (val) => {
    return val>3 ; //过滤掉值不大于3的元素
}
let cb2 = (key,val) => {
    return key=="a" || val == 4; //保留key=a或值val=4的
}
let re1 = ecArr.filter(arr1,cb1); //[4,5]
let re2 = ecArr.filter(arr2,cb2); //{a:1,d:4}
```

### ​flip（arr）
返回一个反转后的 arr，arr 中的键名变成了值，而 arr 中的值成了键名。
```
let arr = {a:"a1",b:"b1"};
let re = ecArr.flip(arr); //{a1:"a",b1:b}
```

### intersect(arr,...arrs)
比较一个或多个数组与arr的交集，返回arr中且在所有其它数组中都存在的元素，多个时需每个数组均存在才返回

只作用于关联数组，key,val均相同才认为相同

```
let arr1 = {a:1,b:2,c:3}
let arr2 = {a:1,b:2,c:4}
let arr3 = {a:2,b:2,c:5}
let re1 = ecArr.intersect(arr1,arr2); //{a:1,b:2}
let re2 = ecArr.intersect(arr1,arr2,arr3); //{b:2}
```

### intersectKey
比较一个或多个数组与arr的交集，返回arr中且在所有其它数组中都存在的元素，多个时需每个数组均存在才返回

只作用于关联数组，key相同则认为相同

```
let arr1 = {a:1,b:2,c:3}
let arr2 = {a:2,b:3,c:4}
let arr3 = {a:2,b:2}
let re1 = ecArr.intersectKey(arr1,arr2); //{a:1,b:2,c:3}
let re2 = ecArr.intersectKey(arr1,arr2,arr3); //{a:1,b:2}
```

### intersectVal
比较一个或多个数组与arr的交集，返回arr中且在所有其它数组中都存在的元素，多个时需每个数组均存在才返回

val相同则认为相同

```
let arr1 = [1,2,3];
let arr2 = [1,3,4,5];
let arr3 = [1,5,6];
let arr4 = {a:1,b:2};
let arr5 = {b:1,c:22};
let re1 = ecArr.intersectVal(arr1,arr2);  //[1,3]
let re2 = ecArr.intersectVal(arr1,arr2,arr3); //[1]
let re3 = ecArr.intersectVal(arr4,arr5); //{a:1}
```

### join(arr,sep = "")
使用sep将一个数组的所有元素连接成字符串,如果是关联数组，则以数组的值进行连接

```
let arr1 = ["a","b","c"];
let arr2 = {a:"a1",b:"b1",c:"c1"};
let re1 = ecArr.join(arr1); //abc
let re2 = ecArr.join(arr1,"-"); //a-b-c
let re3 = ecArr.join(arr2," "); //a1 b1 c1
```

### ​keyExists(arr,key)
判断key是否存在arr中

```
let arr = {a:"a1"}
let re = ecArr.keyExists(arr,"a") //true
let re = ecArr.keyExists(arr,"b") //false
```

### ​keys(arr,val=null)

返回 arr 中所有的key。如果指定了val不等于null，则只返回值为val的key

```
let arr = {a:1,b:1,c:2}
let re = ecArr.keys(arr); //["a","b","c"]
let re1 = ecArr.keys(arr,1); //["a","b"]
```

### ​merge(arr,...arrs)
合并两个或多个数组，key相同的使用后面覆盖前面，如果是下标数组，则直接合并

```
let arr1 = [1,2]
let arr2 = [2,3]
let arr3 = {a:1,b:1}
let arr4 = {a:2,c:3}
let arr5 = {a:3,c:4}
let re1 = ecArr.merge(arr1,arr2); //[1,2,2,3]
let re2 = ecArr.merge(arr1,arr2); //{a:2,b:1,c:3}
let re3 = ecArr.merge(arr1,arr2,arr3); //{a:3,b:1,c:4}
```

### pad(arr, length, val, pos = PAD_BEFORE|PAD_AFTER )
使用val将arr填充至length长度, pos为填充位置，PAD_BEFORE为前方填充(缺省)，PAD_AFTER为后方填充,当arr原长度已大于等于length时直接返回

只作用于数字下标数组

```
let arr = ["a"];
let re1 = ecArr.pad(arr,3,"aa"); //["aa","aa","a"]
let re2 = ecArr.pad(arr,2,"aa",ecArr.PAD_BEFORE); //["aa","a"]
let re3 = ecArr.pad(arr,2,"aa",ecArr.PAD_AFTER); //["a","aa","aa"]
```

### pop(arr)
弹出arr最后一个元素并返回，只作用于数字下标数组

```
let arr = [1,2,3];
let re = ecArr.pop(arr); //3,arr=[1,2]
```

### product(arr)
计算给定数组的所有值的乘积（忽略不是数值的项）

```
let arr = [2,"a",3,"3.5","b"];
let re = ecArr.product(arr); //2*3*3.5
```

### push(arr,...arrs)
将一个或多个元素压入arr 
```
let arr = [1,2];
let re1 = ecArr.push(arr,3); //[1,2,3]
let re2 = ecArr.push(arr,4,5) //]1,2,3,4,5]
```

### ​rand(arr,num = 1)
从数组中随机取出一个或多个元素,返回选中的key，如果num=1直接返回key，如果num>1返回包括所有选中key的数组，num多于arr元素数时，返回全部（随机顺序）

```
let arr = [1,2,3,4];
let re  = ecArr.rand(arr,1);
let re2 = ecArr.rand(arr,2);
```


### range(start,end,step=1)
创建一个包含从start到end的整数数组,step为步长(必须大于等于1)

当start大于end时，则为递减

```
let re1 = ecArr.range(1,5); //[1,2,3,4,5]
let re2 = ecArr.range(1,5,2); //[1,3,5]
let re3 = ecArr.range(5,1,3); //[5,2]
```


### reverse(arr)
返回一个arr反转后的数组

```
let arr1 = [1,2,3]
let arr2 = {a:1,b:2,c:3}
let re1 = ecArr.reverse(arr1); //[3,2,1]
let re2 = ecArr.reverse(arr2); //{c:3,b:2,a:1}
```

### replace(arr,...arrs)
使用一个或多个数组的值来替换arr的值（如果已存在进行替换，如果不存在则创建）

只支持关联数组，有多个时，顺序替换

```
let arr1 = {a:1,b:2}
let arr2 = {b:3,c:4}
let arr3 = {b:4,e:5}
let re1 = ecArr.replace(arr1,arr2); //{a:1,b:3,c:4}
let re2 = ecArr.replace(arr1,arr2,arr3); //{a:1,b:4,c:4,e:5}
```


### search(arr,val)
在arr中查找指定的值val，找到返回第一个命中的索引，找不到返回false
```
let arr1 = [1,2];
let arr2 = {a:1,b:2};
let re1 = ecArr.search(arr1,1); //0 
let re2 = ecArr.search(arr1,2); //1
let re3 = ecArr.search(arr1,3); //false
let re4 = ecArr.search(arr2,1); //"a"
let re5 = ecArr.search(arr2,2); //"b"
let re6 = ecArr.search(arr2,3); //false
```

### ​shift(arr)
将 arr 的第一个单元移出,值作为结果返回，同时arr长度减小，索引重排 

```
let arr1 = [1,2,3];
let arr2 = {a:1,b:1};
let re1 = ecArr.shift(arr1); //1, arr1 = [2,3]
let re2 = ecArr.shift(arr2); //1,arr2 = {b:1}
```

### shuffle(arr)
打乱一个数组

```
var arr = [1,2,3,4,5]
var re = ecArr.shuffle(arr)
```

### slice(arr,offset,length=null)
从arr中的offset开始取出length个元素(offset由0开始表示第一个元素)，以新的数组返回。 当length为null或大于剩余长度时，返回offset后的全部

```
let arr1 = [1,2,3,4];
let arr2 = {a:1,b:2,c:3};
let re1 = ecArr.slice(arr1,1); //[2,3,4]
let re2 = ecArr.slice(arr2,1,1); //{b:2}
```

### sort(arr,sflag = SORT_VAL_ASC)
数组排序(使用unicode比较),sflag指定排序方式: SORT_VAL_ASC(按值升序,缺省),SORT_VAL_DESC(按值降序), SORT_KEY_ASC(按键升序,数字下标时即原样返回)，SORT_KEY_DESC(按键降序)

```
let arr1 = [1,3,5,4,8];
let arr2 = {a:2,b:1,d:4,c:5};
let re1 = ecArr.sort(arr1);//[1,3,4,5,8]
let re2 = ecArr.sort(arr1,ecArr.SORT_VAL_DESC); //[8,5,4,3,1]
let re3 = ecArr.sort(arr1,ecArr.SORT_KEY_DESC); //[8,4,5,3,1]

let re4 = ecArr.sort(arr2); //{b:1,a:2,d:4,c:5}
let re5 = ecArr.sort(arr2,ecArr.SORT_KEY_DESC); //{d:4,c:5,b:1,a:2}
```

### splice(arr,offset,length = 1, ...replacement)
把 arr 中由 offset开始的length个单元去掉，如果提供了 replacement 参数，则用replacement取代被去掉的元素。

```
let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4];
let arr3 = [1,2,3,4];
let re1 = ecArr.splice(arr,1,2); //[1,4]
let re2 = ecArr.splice(arr,1,2,"a");//[1,"a",4]
let re3 = ecArr.splice(arr,1);//[1,3,4]
```

### split(str,sep="",limit=-1)
将字符串str以sep分隔成一个数组，如果设置了limit,则最多返回limit个元素 (limit为负数表示不限)

```
let str1 = "a-b-c-d-e";
let re1 = ecArr.split(arr); //["a","-","b","-","c","-","d","-","e"];
let re2 = ecArr.split(arr,"-"); //["a","b","c","d","e"]
let re3 = ecArr.split(arr,"-",2); //["a","b"]
```


### sum(arr)
计算arr中所有数值元素的和

```
let arr1 = [1,2,3]
let arr2 = [1,"2","a"]
let arr3 = [1,"2.5","b"]
let re1 = ecArr.sum(arr1); //6
let re2 = ecArr.sum(arr2); //3
let re3 = ecArr.sum(arr3); //1+2.5
```

### unique(arr)
返回arr去重后的数组（关联数组val相同表示重复，只保留最先碰到的）

```
let arr1 = [1,1,2,3,3]
let arr2 = {a:1,b:1,c:2,d:3,e:2}
let re1 = ecArr.unique(arr1); //[1,2,3]
let re2 = ecArr.unique(arr2); //{a:1,c:2:d:3}
```

### unshift(arr,...vals)
将一或多个元素插入到arr数组开头,返回插入后的结果

```
let arr1 = [1,2,3]
let re1 = ecArr.unshift(arr1,1); //[1,1,2,3]
let re2 = ecArr.unshift(arr1,"a","b"); //["a","b",1,1,2,3]
```


### ​values(arr)
返回 arr 中所有的值。

```
let arr1 = [1,2,3]
let arr2 = {a:1,b:2}
let re1 = ecArr.values(arr1); //[1,2,3]
let re2 = ecArr.values(arr2); //[1,2]
```