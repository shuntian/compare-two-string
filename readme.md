# 字符串排序

> 对数字, 字母, 汉字等混合数据, 进行混排

## 功能需求

字符串可能的类型

1. 数字字符串
2. 英文字符串
3. 中文字符串
4. 数字中文英文混排

排序条件

1. [数字] 按照数值大小排序
2. [字母] 按照字母顺序排序
3. [中文] 可以按照 ascii 或者 字符首字母字符顺序进行排列
4. 数字在英文字符前面
5. 字母在中文字符前面
6. 一个字符串包含, 数字, 字母, 中文, 则遍历该字符串依次按照前几条规则进行排序

其他:

1. 字符串中的数字, 单个数值依此比较: 如 a1, a12, a2, a13 --> a1, a12, a13 a2
2. 字符串中的数字, 取出连续数字进行比较: 如 a1, a12, a2, a13 --> a1, a2, a12
3. 中文字符同音字的处理

## 安装

```
npm install compare-two-string
```

## 使用

```
import compareTwoString from 'compareTwoString';

const arr = ['add12', 'add2', 'add1', 'cae', 'nihao'];
const options = {
  sortByPinyin: false,
  sortByNumericalSize: false,
};
// up sort
arr.sort((a, b) => compareTwoString(a, b, options)); // ['add1', 'add12', 'add2', 'cae', 'nihao']

// down sort
arr.sort((a, b) => -1 * compareTwoString(a, b, options)); // ['nihao', 'cae', 'add2', 'add12', 'add1']
```

## 参数说明

| 参数名              | 默认值 | 释意                                                                                                                      |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| sortByPinyin        | false  | 默认按照中文字符串的 ASCII 值进行排序, 如果设置为 true, 则按照中文字符串 首字母列表顺序进行排序                           |
| sortByNumericalSize | false  | 包含有数字的字符串(除去纯数字的字符串), 默认按照单个数字大小进行排序, 如果设置为 true, 则按照连续数字字符串的大小进行排序 |

## KEYWORDS

中文首字母, 中文首字母排序, 字符串数字按数字大小排序
