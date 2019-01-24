"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A variable that is made private via comment.
 * @private
 */
exports.fakePrivateVariable = 'test';
/**
 * A variable that is made protected via comment.
 * @protected
 */
exports.fakeProtectedVariable = 'test';
/**
 * A function that is made private via comment.
 * @private
 */
function fakePrivateFunction() { }
exports.fakePrivateFunction = fakePrivateFunction;
/**
 * A function that is made protected via comment.
 * @protected
 */
function fakeProtectedFunction() { }
exports.fakeProtectedFunction = fakeProtectedFunction;
/**
 * A class that is documented as being private.
 * @private
 */
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
    }
    /**
     * A function that is made private via comment.
     * @private
     */
    PrivateClass.prototype.fakePrivateFunction = function () { };
    /**
     * A function that is made protected via comment.
     * @protected
     */
    PrivateClass.prototype.fakeProtectedFunction = function () { };
    return PrivateClass;
}());
exports.PrivateClass = PrivateClass;
/**
 * A module that is documented as being private.
 * @private
 */
var PrivateModule;
(function (PrivateModule) {
    function functionInsidePrivateModule() { }
    PrivateModule.functionInsidePrivateModule = functionInsidePrivateModule;
})(PrivateModule = exports.PrivateModule || (exports.PrivateModule = {}));
