import { promisify } from 'utils/promise';

const [loadDaumPostcode, load, fail] = promisify<void, string>();

const loading = setInterval(() => {
  if (typeof daum !== 'undefined') {
    load();
    clearInterval(loading);
  }
}, 999);

const DAUM_POSTCODE_TIMEOUT = 9 * 1000;
setTimeout(() => {
  fail('daum postcode timeout');
  clearInterval(loading);
}, DAUM_POSTCODE_TIMEOUT);

export function getPostcode(option?: daum.ConstructorProp) {
  return loadDaumPostcode.then(() => new daum.Postcode(option));
}
