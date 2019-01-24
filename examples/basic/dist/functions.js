"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is an internal function.
 */
function internalFunction() { }
/**
 * This is a simple exported function.
 */
function exportedFunction() { }
exports.exportedFunction = exportedFunction;
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
var variableFunction = function (paramZ, paramG, paramA) {
    return 0;
};
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
function functionWithArguments(paramZ, paramG, paramA) {
    return 0;
}
exports.functionWithArguments = functionWithArguments;
/**
 * This is a function with a parameter that is optional.
 *
 * @param requiredParam  A normal parameter.
 * @param optionalParam  An optional parameter.
 */
function functionWithOptionalValue(requiredParam, optionalParam) { }
exports.functionWithOptionalValue = functionWithOptionalValue;
/**
 * This is a function with a parameter that has a default value.
 *
 * @param value  An optional return value.
 * @returns The input value or the default value.
 */
function functionWithDefaults(valueA, valueB, valueC, valueD, valueE) {
    if (valueA === void 0) { valueA = 'defaultValue'; }
    if (valueB === void 0) { valueB = 100; }
    if (valueC === void 0) { valueC = Number.NaN; }
    if (valueD === void 0) { valueD = true; }
    if (valueE === void 0) { valueE = false; }
    return valueA;
}
exports.functionWithDefaults = functionWithDefaults;
/**
 * This is a function with rest parameter.
 *
 * @param rest  Multiple strings.
 * @returns The combined string.
 */
function functionWithRest() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.join(', ');
}
/**
 * This is the actual implementation, this comment will not be visible
 * in the generated documentation.
 */
function multipleSignatures() {
    if (arguments.length > 0) {
        if (typeof arguments[0] == 'object') {
            return arguments[0].name;
        }
        else {
            return arguments[0];
        }
    }
    return '';
}
exports.multipleSignatures = multipleSignatures;
/**
 * This is a generic function.
 *
 * @param T  The type parameter.
 * @param value  The typed value.
 * @return  Returns the typed value.
 */
function genericFunction(value) {
    return value;
}
exports.genericFunction = genericFunction;
/**
 * This is a function that is extended by a module.
 *
 * @param arg An argument.
 */
function moduleFunction(arg) { return ''; }
exports.moduleFunction = moduleFunction;
/**
 * This is the module extending the function moduleFunction().
 */
(function (moduleFunction) {
    /**
     * This variable is appended to a function.
     */
    var functionVariable;
    /**
     * This function is appended to another function.
     */
    function append() {
    }
    /**
     * This function is appended to another function.
     */
    function prepend() {
    }
})(moduleFunction = exports.moduleFunction || (exports.moduleFunction = {}));
/**
 * A function that returns an object.
 * Also no type information is given, the object should be correctly reflected.
 */
function createSomething() {
    return {
        foo: 'bar',
        doSomething: function (a) { return a + 1; },
        doAnotherThing: function () { }
    };
}
exports.createSomething = createSomething;
/**
 * See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.
 * Also, check out {@link http://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 *
 * Taken from http://usejsdoc.org/tags-inline-link.html.
 */
function functionWithDocLink() { }
exports.functionWithDocLink = functionWithDocLink;
