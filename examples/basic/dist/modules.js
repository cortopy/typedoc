"use strict";
/**
 * ...
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a module.
 */
var MyModule;
(function (MyModule) {
    /**
     * This is an object literal.
     */
    MyModule.object = {
        /**
         * An object literal value.
         */
        name: 'Test',
        /**
         * An object literal function.
         */
        print: function (value) { }
    };
    /**
     * This is a submodule.
     */
    var MySubmodule;
    (function (MySubmodule) {
        var a;
    })(MySubmodule = MyModule.MySubmodule || (MyModule.MySubmodule = {}));
    MyModule.exportedModuleVariable = 'foo';
    var moduleVariable = [100, 200];
    var moduleVariable2;
})(MyModule = exports.MyModule || (exports.MyModule = {}));
/**
 * This is a submodule with the preferred comment.
 * @preferred
 */
(function (MyModule) {
    var MySubmodule;
    (function (MySubmodule) {
        var b;
    })(MySubmodule = MyModule.MySubmodule || (MyModule.MySubmodule = {}));
})(MyModule = exports.MyModule || (exports.MyModule = {}));
/**
 * An exported global variable.
 */
exports.exportedGlobalVariable = 'foo';
/**
 * A non-exported global variable.
 */
var globalVariable = 'foo';
/**
 * An object literal.
 */
var objectLiteral = {
    valueZ: 'foo',
    valueY: function () { return 'foo'; },
    valueX: {
        valueZ: 'foo',
        valueY: function (z) { return { a: 'test', b: z }; },
        valueA: [100, 200, 300]
    },
    valueA: 100,
    valueB: true
};
var typeLiteral;
