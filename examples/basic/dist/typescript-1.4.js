"use strict";
/**
 * Examples of features added in TypeScript 1.4.
 *
 * @see  http://blogs.msdn.com/b/typescript/archive/2014/11/18/what-s-new-in-the-typescript-type-system.aspx
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A variable defined using an union type.
 */
var interfaceOrString;
/**
 * A variable pointing to a type alias.
 */
var callback;
/**
 * A function that has parameters pointing to type aliases and returns a type alias.
 */
function functionUsingTypes(aliasData, callback) {
    return 10;
}
/**
 * A generic function using a generic type alias.
 *
 * @param T         Some type argument.
 * @param arr       A generic array.
 * @param callback  Some generic type alias callback.
 * @returns         Some return value.
 */
function functionWithGenericCallback(arr, callback) {
    return 0;
}
/**
 * A simple text class.
 */
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    /**
     * A generic function using a generic type alias.
     *
     * Uses [[GenericCallback]] instead of [[Callback]].
     *
     * @param T         Some type argument.
     * @param arr       A generic array.
     * @param callback  Some generic type alias callback.
     * @returns         Some return value.
     */
    SimpleClass.prototype.someFunction = function (arr, callback) {
        return 0;
    };
    return SimpleClass;
}());
