import { debounce } from './index';

function sleep(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
it('test debounce multi promise ', async () => {
  let count = 0;
  let hasAbortValue = false;
  function incr(i: number) {
    count++;
    return Promise.resolve(i + 1);
  }
  const incrWrap = debounce(incr, 10, 'abortValue');

  // multi call
  incrWrap(5).catch(e => {
    hasAbortValue = true;
    expect(e).toEqual('abortValue');
  });
  incrWrap(5).then(e => expect(e).toEqual(6));

  await sleep(30);
  expect(count).toEqual(1);
  expect(hasAbortValue).toEqual(true);
}, 1000);

it('test debounce promise reject', async () => {
  function incr(i: number) {
    return Promise.reject(i + 1);
  }
  const incrWrap = debounce(incr, 10);

  expect.assertions(1);
  return incrWrap(1).catch(e => expect(e).toEqual(2));
}, 1000);

it('test debounce func abort & throw exception', async () => {
  function incr(i: number | string) {
    if (typeof i !== 'number') {
      throw "not number";
    }
    return i + 1;
  }
  const incrWrap = debounce(incr, 10, "Aborted");

  expect.assertions(3);
  incrWrap(1).catch(n => expect(n).toEqual("Aborted"));
  await incrWrap(5).then(n => expect(n).toEqual(6));
  return incrWrap("").catch(e => expect(e).toEqual("not number"));
}, 1000);

