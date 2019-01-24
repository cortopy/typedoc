import classes = require('./classes');
/**
 * This is a simple exported function.
 */
export declare function exportedFunction(): void;
/**
 * This is a function with multiple arguments and a return value.
 * @param paramZ  This is a string parameter.
 * @param paramG  This is a parameter flagged with any.
 *     This sentence is placed in the next line.
 *
 * @param paramA
 * This is a **parameter** pointing to an interface.
 *
 * ~~~
 * var value:BaseClass = new BaseClass('test');
 * functionWithArguments('arg', 0, value);
 * ~~~
 *
 */
export declare function functionWithArguments(paramZ: string, paramG: any, paramA: classes.INameInterface): number;
/**
 * This is a function with a parameter that is optional.
 *
 * @param requiredParam  A normal parameter.
 * @param optionalParam  An optional parameter.
 */
export declare function functionWithOptionalValue(requiredParam: string, optionalParam?: string): void;
/**
 * This is a function with a parameter that has a default value.
 *
 * @param value  An optional return value.
 * @returns The input value or the default value.
 */
export declare function functionWithDefaults(valueA?: string, valueB?: number, valueC?: number, valueD?: boolean, valueE?: boolean): string;
/**
 * This is the first signature of a function with multiple signatures.
 *
 * @param value  The name value.
 */
export declare function multipleSignatures(value: string): string;
/**
 * This is the second signature of a function with multiple signatures.
 *
 * @param value       An object containing the name value.
 * @param value.name  A value of the object.
 */
export declare function multipleSignatures(value: {
    name: string;
}): string;
/**
 * This is a generic function.
 *
 * @param T  The type parameter.
 * @param value  The typed value.
 * @return  Returns the typed value.
 */
export declare function genericFunction<T>(value: T): T;
/**
 * This is a function that is extended by a module.
 *
 * @param arg An argument.
 */
export declare function moduleFunction(arg: string): string;
/**
 * This is the module extending the function moduleFunction().
 */
export declare module moduleFunction {
}
/**
 * A function that returns an object.
 * Also no type information is given, the object should be correctly reflected.
 */
export declare function createSomething(): {
    foo: string;
    doSomething: (a: number) => number;
    doAnotherThing: () => void;
};
/**
 * See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.
 * Also, check out {@link http://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 *
 * Taken from http://usejsdoc.org/tags-inline-link.html.
 */
export declare function functionWithDocLink(): void;
