/**
 * ...
 */
/**
 * This is a module.
 */
export declare module MyModule {
    /**
     * This is an object literal.
     */
    var object: {
        /**
         * An object literal value.
         */
        name: string;
        /**
         * An object literal function.
         */
        print: (value: string) => void;
    };
    /**
     * This is a submodule.
     */
    module MySubmodule {
    }
    var exportedModuleVariable: string;
}
/**
 * This is a submodule with the preferred comment.
 * @preferred
 */
export declare module MyModule.MySubmodule {
}
/**
 * An exported global variable.
 */
export declare var exportedGlobalVariable: string;
