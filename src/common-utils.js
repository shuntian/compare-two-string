import { chinese2FirstLetter } from './chinese-utils';

// const REG_NUMBER_DIGIT = /\d/;
const REG_STRING_NUMBER_PARTS = /\d+|\D+/g;

export const isVoid = (val) => {
  return val === undefined || val === null || val === '';
};

export const isNumber = (str) => {
  return typeof str === 'number';
};

export const isChineseChar = (char) => {
  return /^[\u4E00-\u9FA5]$/.test(char);
};

export const isAllChineseStr = (str) => {
  return /^[\u4E00-\u9FA5]+$/.test(str);
};

export const splitStringByNumber = (str, opts) => {
  let strArr = [];
  const arr = str.match(REG_STRING_NUMBER_PARTS);
  for (let i = 0; i < arr.length; i++) {
    const splitStr = arr[i];
    if (isNaN(splitStr)) {
      strArr = strArr.concat(splitStr.split(''));
    } else {
      // Whether to split numbers
      if (!opts.sortByNumericalSize) {
        strArr = strArr.concat(splitStr.split(''));
      } else {
        strArr.push(splitStr);
      }
    }
  }
  return strArr;
};

export const sortChineseStrByAscii = (stringA, stringB) => {
  const length = Math.min(stringA.length, stringB.length);
  let result = 0;
  for (let i = 0; i < length; i++) {
    const uni_a = stringA[i].charCodeAt(0);
    const uni_b = stringB[i].charCodeAt(0);
    if (uni_a > uni_b) {
      result = 1;
      return result;
    }
    if (uni_a < uni_b) {
      result = -1;
      return result;
    }
  }
  // The same after comparison, the string length is larger
  if (stringA.length > stringB.length) return 1;
  if (stringA.length < stringB.length) return -1;
  return 0;
};

export const sortChineseStrByPinYin = (stringA, stringB) => {
  const length = Math.min(stringA.length, stringB.length);
  for (let i = 0; i < length; i++) {
    const pinyin_a = chinese2FirstLetter(stringA[i])[0];
    const pinyin_b = chinese2FirstLetter(stringB[i])[0];
    if (pinyin_a > pinyin_b) {
      return 1;
    }
    if (pinyin_a < pinyin_b) {
      return -1;
    }
  }
  // The same after comparison, the string length is larger
  if (stringA.length > stringB.length) return 1;
  if (stringA.length < stringB.length) return -1;
  return 0;
};
