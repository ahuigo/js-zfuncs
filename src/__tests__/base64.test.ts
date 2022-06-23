import { b64Decode,b64Encode } from '../index';


it('test base64', () => {
  const b = b64Encode('中')
  expect(b).toBe('5Lit')
  const d = b64Decode('5Lit')
  expect(d).toBe('中')
});

