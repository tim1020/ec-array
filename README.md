# ec-array [![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

之前写了多年的PHP，PHP的数组相关函数很丰富，这里尝试把PHP的数组函数用nodejs实现一遍，可作为工具包使用。

php的数组有两种方式： 

1. 不指定key（传统意义的数组），如 $arr = array("a","b","c")
2. 指定key，如 $arr = array("a"=>1,"b"=>2)

对应到js，即 数组 [1,2,3] 和 对象{a:1,b:2}, 本工具包所使用的“数组”，兼容这两种类型，但对于不同的函数，对于输入输出数组时要求使用的类型可能不同。


## install

```
npm install ec-array --save
```

or download from github  [https://github.com/tim1020/ec-array]

## 使用方式

```
var ecArr = require("ec-array");
var a1 = [1,2,3,4];
var s1 = ecArr.join(a1);

```


## 函数列表

@see [API DOC](doc.md)


## License

MIT is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).


