/**
 * This class is exported under a different name. The exported name is
 * "ExportedClassName"
 *
 * ```JavaScript
 * export {NotExportedClassName as ExportedClassName};
 * ```
 */
declare class NotExportedClassName {
    /**
     * Property of NotExportedClassName class.
     */
    notExportedProperty: string;
    /**
     * This is the constructor of the NotExportedClassName class.
     */
    constructor();
    /**
     * Method of NotExportedClassName class.
     */
    getNotExportedProperty(): string;
}
/**
 * This class is exported via es6 export syntax.
 *
 * ```
 * export default class DefaultExportedClass
 * ```
 */
export default class DefaultExportedClass {
    /**
     * Property of default exported class.
     */
    exportedProperty: string;
    /**
     * This is the constructor of the default exported class.
     */
    constructor();
    /**
     * Method of default exported class.
     */
    getExportedProperty(): string;
}
export { NotExportedClassName as ExportedClassName };
