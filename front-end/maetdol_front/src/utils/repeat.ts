export function repeat<T>(count: number, callback: (index: number) => T) {
  const output = [];
  for (let i = 0; i < count; i += 1) {
    output.push(callback(i));
  }
  return output;
}
