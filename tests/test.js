const formatResult = (letterArr) => {
  let arrResult = [''];
  const length = letterArr.length;

  for (let i = 0; i < length; i++) {
    const str = letterArr[i];
    const strlen = str.length;
    if (strlen === 1) {
      arrResult = arrResult.map((item) => (item += str));
      continue;
    }

    // Handle polyphonic characters
    const oldResult = arrResult.slice(0);
    arrResult = [];
    for (let k = 0; k < strlen; k++) {
      let tmp = oldResult.slice(0);
      // Append the current character to the end of each element
      tmp = tmp.map((item) => (item += str.charAt(k)));
      // Connect the copied and modified array to arrResult
      arrResult = arrResult.concat(tmp);
    }
  }
  return arrResult;
};

const arr = ['cz', 'l', 'r', 'cs'];
const ret = formatResult(arr);
console.log(ret);
