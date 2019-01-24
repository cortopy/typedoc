/**
 * A class that contains members with flattened properties.
 */
var flattenedClass = /** @class */ (function () {
    /**
     * A constructor that accepts an option object defined inline.
     *
     * @param options                         The inline typed options object.
     * @param options.value                   A value on the options object parameter.
     * @param options.anotherValue            Another value on the options object parameter.
     * @param options.moreOptions             A typed child object of the options object.
     * @param options.moreOptions.moreValues  A value of the typed child object.
     */
    function flattenedClass(options) {
    }
    return flattenedClass;
}());
/**
 * A function that has a parameter that requires a typed function callback.
 *
 * @param callback                The typed function callback.
 * @param callback.param          A parameter of the typed function callback.
 * @param callback.optionalParam  An optional parameter of the typed function callback.
 */
function flattenedCallback(callback) { }
/**
 * A function that accepts an option object defined inline.
 *
 * @param options                         The inline typed options object.
 * @param options.value                   A value on the options object parameter.
 * @param options.anotherValue            Another value on the options object parameter.
 * @param options.moreOptions             A typed child object of the options object.
 * @param options.moreOptions.moreValues  A value of the typed child object.
 */
function flattenedParameter(options) { }
/**
 * A function that accepts an index signature parameter.
 *
 * @param indexed        The index signature parameter.
 * @param indexed.index  The index property comment.
 * @param indexed.test   A property of the index signature instance.
 */
function flattenedIndexSignature(indexed) { }
