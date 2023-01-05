import { aa } from '../src/index';

test('aa', () => {
  const b = aa(1, 4);
  expect(b).toBe(5);
})