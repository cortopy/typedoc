/**
 * This class is exported by being assigned to ´export´.
 *
 * ~~~
 * export = SingleExportedClass;
 * ~~~
 */
declare class SingleExportedClass {
    /**
     * Property of exported class.
     */
    exportedProperty: string;
    /**
     * This is the constructor of the exported class.
     */
    constructor();
    /**
     * Method of exported class.
     */
    getExportedProperty(): string;
}
/**
 * The export statement.
 */
export = SingleExportedClass;
