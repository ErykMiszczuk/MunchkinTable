export function functionalTry(callable: Function): [any, null] | [null, any] {
  try {
    const result = callable();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}
