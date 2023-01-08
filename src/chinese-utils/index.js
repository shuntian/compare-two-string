import { oMultiDiff, strChineseFirstPY } from "./constants";

const getFirstLatter = (char) => {
  const uni = char.charCodeAt(0);
  // If it is not within the scope of Chinese character processing, return the original character
  if (uni > 40869 || uni < 19968) return char;
  // Check if it is polyphonic
  // Yes: Treat as polyphonic characters
  // No: directly find the corresponding initial letter in the strChineseFirstPY string
  return oMultiDiff[uni] ? oMultiDiff[uni] : (strChineseFirstPY.charAt(uni - 19968));
};

const getStrLetters = (str) => {
  const charArr = str.split('');
  return charArr.map(item => getFirstLatter(item));
};

const formatResult = (letterArr) => {
  let arrResult = [''];
  const length = letterArr.length;

  for (let i = 0; i < length; i++) {
    const str = letterArr[i];
    const strlen = str.length;
    if (strlen === 1) {
      arrResult = arrResult.map(item => item += str);
      continue;
    }

    // Handle polyphonic characters
    const oldResult = arrResult.slice(0);
    arrResult = [];
    for (let k = 0; k < strlen; k++) {
      let tmp = oldResult.slice(0);
      // Append the current character to the end of each element
      tmp = tmp.map(item => item += str.charAt(k));
      // Connect the copied and modified array to arrResult
      arrResult = arrResult.concat(tmp);
    }
  }
  return arrResult;
};

const chinese2FirstLatter = (str) => {
  if (typeof (str) != 'string') {
    throw new Error("Please pass in a parameter of string type!");
  }

  const letterArr = getStrLetters(str);
  const result = formatResult(letterArr);
  return result;
};

export {
  chinese2FirstLatter
};
