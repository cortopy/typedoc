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
/**
 * A class with protected members.
 */
var ClassWithProtectedMembers = /** @class */ (function () {
    function ClassWithProtectedMembers() {
    }
    /**
     * A public property.
     */
    ClassWithProtectedMembers.prototype.publicMethod = function () { };
    /**
     * A protected property.
     */
    ClassWithProtectedMembers.prototype.protectedMethod = function () { };
    /**
     * A private property.
     */
    ClassWithProtectedMembers.prototype.privateMethod = function () { };
    return ClassWithProtectedMembers;
}());
/**
 * A subclass with inherited protected members.
 */
var SubclassWithProtectedMembers = /** @class */ (function (_super) {
    __extends(SubclassWithProtectedMembers, _super);
    function SubclassWithProtectedMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubclassWithProtectedMembers;
}(ClassWithProtectedMembers));
/**
 * A variable with a tuple type.
 */
var tupleType = ['test', new ClassWithProtectedMembers()];
