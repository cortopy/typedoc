"use strict";
/**
 * This class is not exported.
 */
var NotExportedClass = /** @class */ (function () {
    /**
     * This is the constructor of the not exported class.
     */
    function NotExportedClass() {
    }
    /**
     * Method of not exported class.
     */
    NotExportedClass.prototype.getNotExportedProperty = function () {
        return this.notExportedProperty;
    };
    return NotExportedClass;
}());
/**
 * This class is exported by being assigned to ´export´.
 *
 * ~~~
 * export = SingleExportedClass;
 * ~~~
 */
var SingleExportedClass = /** @class */ (function () {
    /**
     * This is the constructor of the exported class.
     */
    function SingleExportedClass() {
    }
    /**
     * Method of exported class.
     */
    SingleExportedClass.prototype.getExportedProperty = function () {
        return this.exportedProperty;
    };
    return SingleExportedClass;
}());
module.exports = SingleExportedClass;
