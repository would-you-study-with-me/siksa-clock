export function promisify<T = void, K = void>(): [
  Promise<T>,
  (data: T) => void,
  (reason: K) => void,
] {
  let resolver: (data: T) => void = () => undefined;
  let rejector: (reason: K) => void = () => undefined;
  const promise = new Promise<T>((done, fail) => {
    resolver = done;
    rejector = fail;
  });
  return [promise, resolver, rejector];
}
