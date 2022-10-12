/**
 * objectCleaner() v1.0
 * @param object the object you want to clean
 * @param ...names the props you want to remove it from the object
 * @returns cleaned object
 */
export function objectCleaner<T>(object: T, [...names]: string[]): T {
  names.forEach((name) => {
    delete object[name];
  });

  return object;
}
