import { compareTwoString } from '../src/index';

const testCase = [
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

const options = {
  sortByAscii: true,
  sortByNumericalSize: true,
};

test('up test', () => {
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

test('down test', () => {
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
