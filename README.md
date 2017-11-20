# ec-array [![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

之前写了多年的PHP，PHP其中一个比较爽的地方就是数组相关函数非常丰富，这里尝试把PHP的数组函数用nodejs实现一遍，可作为工具包使用。欢迎提出意见建议及star ^_^ 

php的数组有两种方式： 

1. 不指定key（传统意义的数组），如 $arr = array("a","b","c")
2. 指定key（关联数组），如 $arr = array("a"=>1,"b"=>2)

对应到js，即 数组 [1,2,3] 和 对象{a:1,b:2}。

本函数包很多功能是基于Array.prototype进行封装，并尽量加上关联数组的兼容。


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


