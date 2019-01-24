/**
 * A variable that is made private via comment.
 * @private
 */
export declare var fakePrivateVariable: string;
/**
 * A variable that is made protected via comment.
 * @protected
 */
export declare var fakeProtectedVariable: string;
/**
 * A function that is made private via comment.
 * @private
 */
export declare function fakePrivateFunction(): void;
/**
 * A function that is made protected via comment.
 * @protected
 */
export declare function fakeProtectedFunction(): void;
/**
 * A class that is documented as being private.
 * @private
 */
export declare class PrivateClass {
    /**
     * A variable that is made private via comment.
     * @private
     */
    fakePrivateVariable: string;
    /**
     * A variable that is made protected via comment.
     * @protected
     */
    fakeProtectedVariable: string;
    /**
     * A function that is made private via comment.
     * @private
     */
    fakePrivateFunction(): void;
    /**
     * A function that is made protected via comment.
     * @protected
     */
    fakeProtectedFunction(): void;
}
/**
 * A module that is documented as being private.
 * @private
 */
export declare module PrivateModule {
    function functionInsidePrivateModule(): void;
}
