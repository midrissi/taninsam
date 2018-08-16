import { Getter } from '../@types';

/**
 * @module array=>object
 */
/**
 * Convert an array to an associative map store in a javascript object.
 * @param keyGetter A function to extract the key of the association.
 * @param valueGetter A function to extract the value of the association.
 * @return the function to apply on the array to do convert it into a javascript object
 * @example
 * ```
 * toObject<(string | number)[][]>(item => item[0], item => item[1])([['a', 1], ['b', 'c']]) // {a: 1, b: 'c'}
 * ```
 * @example Using the chain
 * ```
 * chain([['a', 1], ['b', 2]])
 *   .chain(toObject<(string | number)[][]>(item => item[0], item => item[1]))
 *   .value() // {a: 1, b: 'c'}
 * ```
 */
export function toObject<T, U>(
  keyGetter: Getter<T, string>,
  valueGetter: Getter<T, U>
): (array: T[]) => { [key: string]: U } {
  return (array: T[]) =>
    array.reduce(
      (mapObject: { [key: string]: U }, element: T): { [key: string]: U } => ({
        ...mapObject,
        [keyGetter(element)]: valueGetter(element)
      }),
      {}
    );
}
