// 防抖动: 不抖动才执行
/**
 *
 * @param f callback
 * @param wait milliseconds
 * @param abortValue if has abortValue, promise will reject it if
 * @returns Promise
 */
export function debounce<T extends (...args: any[]) => any>(
  f: T,
  wait: number,
  abortValue: any = undefined,
) {
  let cancel = () => { };
  // type Awaited<T> = T extends PromiseLike<infer U> ? U : T
  type ReturnT = Awaited<ReturnType<T>>;
  const wrapF = (...args: Parameters<T>): Promise<ReturnT> => {
    cancel();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        try {
          resolve(f(...args));
        } catch (e) {
          reject(e);
        }
      }, wait);
      cancel = () => {
        clearTimeout(timer);
        if (abortValue !== undefined) {
          reject(abortValue);
        }
      };
    });
  };
  return wrapF;
}


// test
if (false) {
  // deno run src/utils/perf.ts
  function add(a: number) {
    return Promise.resolve(a + 1);
  }
  const wrapFn = debounce(add, 500, 'Aborted');
  wrapFn(2).then(console.log).catch(console.log); // Aborted
  wrapFn(3).then(console.log).catch(console.log); // 4
}
// test
if (false) {
  // deno run src/utils/perf.ts
  function add(a: number) {
    return Promise.resolve(a + 1);
  }
  const wrapFn = debounce(add, 500, 'Aborted');
  wrapFn(2).then(console.log).catch(console.log).finally(() => console.log('final-clean')); // Aborted + final-clean
  wrapFn(3).then(console.log).catch(console.log).finally(() => console.log('final-clean')); // 4 + final_clean
}


// 节流: 排除限速(执行时长间隔)
export function throttle<T extends (...args: any[]) => any>(func: T, wait: number) {
  let previous = 0;
  return function (...args: any[]) {
    let now = Date.now();
    if (now - previous > wait) {
      func(...args);
      previous = now;
    }
  };
}
