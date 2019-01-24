/**
 * Examples of features added in TypeScript 1.4.
 *
 * @see  http://blogs.msdn.com/b/typescript/archive/2014/11/18/what-s-new-in-the-typescript-type-system.aspx
 */
/**
 * A type alias of for a generic callback function.
 *
 * @param GenericCallback.T      Some type argument.
 * @param GenericCallback.val    Some generic value.
 * @param GenericCallback.index  Some index value.
 * @param GenericCallback.arr    A generic array.
 * @return       Some return value.
 */
export declare type GenericCallback = <T>(val: T, index: number, arr: Array<T>) => any;
