import { chinese2FirstLetter } from '../../src/chinese-utils';

test('test chinese 2 first letters', () => {
  const chinese = '柿子红了';
  const letters = chinese2FirstLetter(chinese)[0];
  expect(letters).toBe('SZHL');
});

test('test chinese 2 first letters', () => {
  const chinese = '我命由我不由天';
  const letters = chinese2FirstLetter(chinese)[0];
  expect(letters).toBe('WMYWBYT');
});

test('test chinese 2 first letters', () => {
  const chinese = '天山鸟飞绝';
  const letters = chinese2FirstLetter(chinese)[0];
  expect(letters).toBe('TSNFJ');
});
