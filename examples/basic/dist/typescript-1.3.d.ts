/**
 * A class with protected members.
 */
declare class ClassWithProtectedMembers {
    /**
     * A public property.
     */
    publicProperty: string;
    /**
     * A protected property.
     */
    protected protectedProperty: string;
    /**
     * A private property.
     */
    private privateProperty;
    /**
     * A public property.
     */
    publicMethod(): void;
    /**
     * A protected property.
     */
    protected protectedMethod(): void;
    /**
     * A private property.
     */
    private privateMethod;
}
/**
 * A subclass with inherited protected members.
 */
declare class SubclassWithProtectedMembers extends ClassWithProtectedMembers {
}
/**
 * A variable with a tuple type.
 */
declare var tupleType: [string, ClassWithProtectedMembers];
