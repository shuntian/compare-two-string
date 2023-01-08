import {
  isAllChineseStr,
  isChineseChar,
  isVoid,
  sortChineseStrByAscii,
  sortChineseStrByPinYin,
  splitStringByNumber,
} from './common-utils';

const DEFAULT_OPTIONS = {
  sortByPinyin: false,
  sortByNumericalSize: false,
};

/**
 * @param {string} stringA first string
 * @param {string} stringB second string
 * @param {object} options sort params
 * @return 1 | 0 | -1
 */
const compareTwoString = (stringA, stringB, options = {}) => {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  // stringA > stringB: 1;
  // stringA < stringB: -1;
  // stringA === stringB: 0;
  if (isVoid(stringA) && isVoid(stringB)) return 0;
  if (isVoid(stringA)) return -1;
  if (isVoid(stringB)) return 1;

  if (typeof stringA !== 'string' || typeof stringB !== 'string') {
    throw new Error('Please enter two string type data for comparison');
  }

  if (options && typeof options !== 'object') {
    throw new Error(
      'The parameter options does not conform to the specification'
    );
  }

  // stringA and stringB are number string
  if (!isNaN(stringA) && !isNaN(stringB)) {
    if (Number(stringA) === Number(stringB)) return 0;
    if (Number(stringA) > Number(stringB)) return 1;
    return -1;
  }

  if (isAllChineseStr(stringA) && isAllChineseStr(stringB)) {
    if (!opts.sortByPinyin) {
      return sortChineseStrByAscii(stringA, stringB);
    } else {
      return sortChineseStrByPinYin(stringA, stringB);
    }
  }

  const arrStringA = splitStringByNumber(stringA, opts);
  const arrStringB = splitStringByNumber(stringB, opts);

  let result = 0;
  const length = Math.min(arrStringA.length, arrStringB.length);
  for (let i = 0; i < length; i++) {
    const charA = arrStringA[i];
    const charB = arrStringB[i];

    // one of the char is chinese: number & string is before chinese
    if (!isChineseChar(charA) && isChineseChar(charB)) {
      result = -1;
    }
    if (isChineseChar(charA) && !isChineseChar(charB)) {
      result = 1;
    }

    // all the char are not chinese
    if (!isChineseChar(charA) && !isChineseChar(charB)) {
      // numbers before the string
      if (!isNaN(charA) && isNaN(charB)) {
        result = -1;
      }
      if (isNaN(charA) && !isNaN(charB)) {
        result = 1;
      }

      // all the char are number
      if (!isNaN(charA) && !isNaN(charB)) {
        if (Number(charA) > Number(charB)) {
          result = 1;
        } else if (Number(charA) < Number(charB)) {
          result = -1;
        }
      }

      // all the char are not number
      if (
        isNaN(charA) &&
        typeof charA === 'string' &&
        typeof charB === 'string'
      ) {
        if (charA > charB) {
          result = 1;
        } else if (charA < charB) {
          result = -1;
        }
      }
    }

    // all the char are chinese
    if (isChineseChar(charA) && isChineseChar(charB)) {
      if (!opts.sortByPinyin) {
        result = sortChineseStrByAscii(charA, charB);
      } else {
        result = sortChineseStrByPinYin(charA, charB);
      }
    }
    if (result !== 0) {
      break;
    }
  }
  if (result !== 0) return result;

  // result = 0
  // The same after comparison, the string length is larger
  if (stringA.length > stringB.length) return 1;
  if (stringA.length < stringB.length) return -1;
  return 0;
};

export { compareTwoString };
