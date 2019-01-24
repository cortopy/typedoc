"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class is exported under a different name. The exported name is
 * "ExportedClassName"
 *
 * ```JavaScript
 * export {NotExportedClassName as ExportedClassName};
 * ```
 */
var NotExportedClassName = /** @class */ (function () {
    /**
     * This is the constructor of the NotExportedClassName class.
     */
    function NotExportedClassName() {
    }
    /**
     * Method of NotExportedClassName class.
     */
    NotExportedClassName.prototype.getNotExportedProperty = function () {
        return this.notExportedProperty;
    };
    return NotExportedClassName;
}());
exports.ExportedClassName = NotExportedClassName;
/**
 * This class is exported via es6 export syntax.
 *
 * ```
 * export default class DefaultExportedClass
 * ```
 */
var DefaultExportedClass = /** @class */ (function () {
    /**
     * This is the constructor of the default exported class.
     */
    function DefaultExportedClass() {
    }
    /**
     * Method of default exported class.
     */
    DefaultExportedClass.prototype.getExportedProperty = function () {
        return this.exportedProperty;
    };
    return DefaultExportedClass;
}());
exports.default = DefaultExportedClass;
