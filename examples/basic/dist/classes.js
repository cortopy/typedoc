"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a simple base class.
 *
 * [[include:class-example.md]]
 */
var BaseClass = /** @class */ (function () {
    function BaseClass() {
        /**
         * This is a simple fat arrow function.
         *
         * @param param1 The first parameter needed by this function.
         * @param param2 The second parameter needed by this function.
         * @see https://github.com/sebastian-lenz/typedoc/issues/37
         */
        this.arrowFunction = function (param2, param1) {
        };
        if (arguments.length > 0) {
            if (typeof arguments[0] == 'string') {
                this.name = arguments[0];
            }
            else if (arguments[0] instanceof BaseClass) {
                this.name = arguments[0].name;
            }
        }
        this.checkName();
    }
    /**
     * This is a simple member function.
     *
     * It should be inherited by all subclasses. This class has a static
     * member with the same name, both should be documented.
     *
     * @returns Return the name.
     */
    BaseClass.prototype.getName = function () {
        return this.name;
    };
    /**
     * This is a simple static member function.
     *
     * Static functions should not be inherited. This class has a
     * member with the same name, both should be documented.
     *
     * @returns Return the name.
     */
    BaseClass.getName = function () {
        return 'A name';
    };
    /**
     * This is a simple member function.
     *
     * It should be inherited by all subclasses.
     *
     * @param name The new name.
     */
    BaseClass.prototype.setName = function (name) {
        this.name = name;
        this.checkName();
    };
    /**
     * This is a private function.
     */
    BaseClass.prototype.checkName = function () {
        return true;
    };
    /**
     * This is a static function.
     *
     * Static functions should not be inherited.
     *
     * @returns An instance of BaseClass.
     */
    BaseClass.getInstance = function () {
        return BaseClass.instance;
    };
    /**
     * @see https://github.com/sebastian-lenz/typedoc/issues/42
     */
    BaseClass.caTest = function (originalValues, newRecord, fieldNames, mandatoryFields) {
        var returnval = "";
        var updates = [];
        var allFields = fieldNames;
        for (var j = 0; j < allFields.length; j++) {
            var field = allFields[j];
            var oldValue = originalValues[field];
            var newValue = newRecord[field];
        }
        return returnval;
    };
    return BaseClass;
}());
exports.BaseClass = BaseClass;
/**
 * This is an internal class, it is not exported.
 */
var InternalClass = /** @class */ (function () {
    function InternalClass(options) {
    }
    return InternalClass;
}());
/**
 * This is a class that extends another class.
 *
 * This class has no own constructor, so its constructor should be inherited
 * from BaseClass.
 */
var SubClassA = /** @class */ (function (_super) {
    __extends(SubClassA, _super);
    function SubClassA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This is a simple interface function.
     */
    SubClassA.prototype.print = function (value) { };
    /**
     * @inheritdoc
     */
    SubClassA.prototype.printName = function () {
        this.print(this.getName());
    };
    Object.defineProperty(SubClassA.prototype, "nameProperty", {
        /**
         * Returns the name. See [[BaseClass.name]].
         *
         * @returns The return value.
         */
        get: function () {
            return this.name;
        },
        /**
         * Sets the name. See [[BaseClass.name]].
         *
         * @param value The new name.
         * @returns The return value.
         */
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubClassA.prototype, "readOnlyNameProperty", {
        /**
         * Returns the name. See [[BaseClass.name]].
         *
         * @returns The return value.
         */
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubClassA.prototype, "writeOnlyNameProperty", {
        /**
         * Sets the name. See [[BaseClass.name]].
         *
         * @param value The new name.
         * @returns The return value.
         */
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    SubClassA.prototype.abstractMethod = function () {
    };
    return SubClassA;
}(BaseClass));
exports.SubClassA = SubClassA;
/**
 * This is a class that extends another class.
 *
 * The constructor of the original class should be overwritten.
 */
var SubClassB = /** @class */ (function (_super) {
    __extends(SubClassB, _super);
    function SubClassB(name) {
        return _super.call(this, name) || this;
    }
    SubClassB.prototype.abstractMethod = function () {
    };
    SubClassB.prototype.doSomething = function (value) {
    };
    return SubClassB;
}(BaseClass));
exports.SubClassB = SubClassB;
/**
 * This is a generic class.
 *
 * @param T  This a type parameter.
 */
var GenericClass = /** @class */ (function () {
    /**
     * Constructor short text.
     *
     * @param p1 Constructor param
     * @param p2 Private string property
     * @param p3 Public number property
     * @param p4 Public implicit any property
     * @param p5 Readonly property
     */
    function GenericClass(p1, p2, p3, p4, p5) {
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
        this.p5 = p5;
    }
    /**
     * @param value [[getValue]] is the counterpart.
     */
    GenericClass.prototype.setValue = function (value) {
        this.value = value;
    };
    GenericClass.prototype.getValue = function () {
        return this.value;
    };
    return GenericClass;
}());
exports.GenericClass = GenericClass;
/**
 * This a non generic class derived from a [[GenericClass|generic class]].
 */
var NonGenericClass = /** @class */ (function (_super) {
    __extends(NonGenericClass, _super);
    function NonGenericClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NonGenericClass;
}(GenericClass));
exports.NonGenericClass = NonGenericClass;
