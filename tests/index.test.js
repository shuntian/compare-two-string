import { compareTwoString } from '../src/index';

const numberStringTestCase = ['123', '223', '1233', '432'];

test('sort number string: up', () => {
  const rst = numberStringTestCase.sort((a, b) => compareTwoString(a, b));
  expect(rst.toString()).toBe('123,223,432,1233');
});

test('sort number string: down', () => {
  const rst = numberStringTestCase.sort((a, b) => -1 * compareTwoString(a, b));
  expect(rst.toString()).toBe('1233,432,223,123');
});

const charStringTestCase = ['adda', 'dfafa', 'veafdf', 'zdeafd'];

test('sort char string: up', () => {
  const rst = charStringTestCase.sort((a, b) => compareTwoString(a, b));
  expect(rst.toString()).toBe('adda,dfafa,veafdf,zdeafd');
});

test('sort char string: down', () => {
  const rst = charStringTestCase.sort((a, b) => -1 * compareTwoString(a, b));
  expect(rst.toString()).toBe('zdeafd,veafdf,dfafa,adda');
});

const charAndNumberTest = ['add12', 'add2', 'add1', 'cae', 'nihao'];

test('sort char and number string: up', () => {
  const rst = charAndNumberTest.sort((a, b) => compareTwoString(a, b));
  const exp = ['add1', 'add12', 'add2', 'cae', 'nihao'];
  expect(rst.toString()).toBe(exp.toString());
});

test('sort char and number string: down', () => {
  const rst = charAndNumberTest.sort((a, b) => -1 * compareTwoString(a, b));
  const exp = ['nihao', 'cae', 'add2', 'add12', 'add1'];
  expect(rst.toString()).toBe(exp.toString());
});

test('sort char and number string with numeric size: up', () => {
  const options = {
    sortByNumericalSize: true,
  };
  const rst = charAndNumberTest.sort((a, b) => compareTwoString(a, b, options));
  const exp = ['add1', 'add2', 'add12', 'cae', 'nihao'];
  expect(rst.toString()).toBe(exp.toString());
});

test('sort char and number string with numeric size: down', () => {
  const options = {
    sortByNumericalSize: true,
  };
  const rst = charAndNumberTest.sort(
    (a, b) => -1 * compareTwoString(a, b, options)
  );
  const exp = ['nihao', 'cae', 'add12', 'add2', 'add1'];
  expect(rst.toString()).toBe(exp.toString());
});

const allCharsTestCase = [
  '123',
  '223',
  '434',
  'dea',
  'aaa',
  '孝正',
  '小名',
  '孝正',
  '小名',
  '小白',
  '小黄',
  '小白',
  '水',
  '小黄',
  '小黄1',
  '小黄2',
  '小黄12',
];
test('sort all chars and chinese with ascii: up', () => {
  const options = {
    sortByPinyin: false,
    sortByNumericalSize: true,
  };
  const testCase = allCharsTestCase.slice(0);
  const ret = testCase.sort((a, b) => compareTwoString(a, b, options));
  const exp = [
    '123',
    '223',
    '434',
    'aaa',
    'dea',
    '孝正',
    '孝正',
    '小名',
    '小名',
    '小白',
    '小白',
    '小黄',
    '小黄',
    '小黄1',
    '小黄2',
    '小黄12',
    '水',
  ];
  expect(ret.toString()).toBe(exp.toString());
});

test('sort all chars adn chinese with ascii: down', () => {
  const options = {
    sortByPinyin: false,
    sortByNumericalSize: true,
  };
  const testCase = allCharsTestCase.slice(0);
  const ret = testCase.sort((a, b) => -1 * compareTwoString(a, b, options));
  const exp = [
    '水',
    '小黄12',
    '小黄2',
    '小黄1',
    '小黄',
    '小黄',
    '小白',
    '小白',
    '小名',
    '小名',
    '孝正',
    '孝正',
    'dea',
    'aaa',
    '434',
    '223',
    '123',
  ];
  expect(ret.toString()).toBe(exp.toString());
});

test('sort all chars adn chinese with pinyin: up', () => {
  const options = {
    sortByPinyin: true,
    sortByNumericalSize: true,
  };
  const testCase = allCharsTestCase.slice(0);
  const ret = testCase.sort((a, b) => compareTwoString(a, b, options));
  const exp = [
    '123',
    '223',
    '434',
    'aaa',
    'dea',
    '水',
    '小白',
    '小白',
    '小黄',
    '小黄',
    '小黄1',
    '小黄2',
    '小黄12',
    '小名',
    '小名',
    '孝正',
    '孝正',
  ];
  expect(ret.toString()).toBe(exp.toString());
});

test('sort all chars adn chinese with pinyin: down', () => {
  const options = {
    sortByPinyin: true,
    sortByNumericalSize: true,
  };
  const testCase = allCharsTestCase.slice(0);
  const ret = testCase.sort((a, b) => -1 * compareTwoString(a, b, options));
  const exp = [
    '孝正',
    '孝正',
    '小名',
    '小名',
    '小黄12',
    '小黄2',
    '小黄1',
    '小黄',
    '小黄',
    '小白',
    '小白',
    '水',
    'dea',
    'aaa',
    '434',
    '223',
    '123',
  ];
  expect(ret.toString()).toBe(exp.toString());
});
