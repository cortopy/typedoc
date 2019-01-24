/**
 * Destructuring objects.
 */
var _a = { destructObjectA: 0, destructObjectB: 'string', destructObjectC: 0 }, destructObjectA = _a.destructObjectA, destructObjectB = _a.destructObjectB, destructObjectC = _a.destructObjectC;
/**
 * Destructuring arrays.
 */
var _b = [0, 'string', 0], destructArrayA = _b[0], destructArrayB = _b[1], _c = _b[2], destructArrayC = _c === void 0 ? 10 : _c;
/**
 * Array Destructuring with rest
 */
var _d = [1, 2, 3, 4], destructArrayWithRestA = _d[0], destructArrayWithRestB = _d[1], destructArrayWithRest = _d.slice(2);
/**
 * Array Destructuring with ignores
 */
var _e = [1, 2, 3, 4], destructArrayWithIgnoresA = _e[0], destructArrayWithIgnoresRest = _e.slice(2);
/**
 * Destructuring function parameters.
 *
 * @param text This is the text
 * @param location This is the location
 * @param bold Should it be bold?
 */
function drawText(_a) {
    var _b = _a.text, text = _b === void 0 ? "" : _b, _c = _a.location, _d = _c === void 0 ? [0, 0] : _c, x = _d[0], y = _d[1], _e = _a.bold, bold = _e === void 0 ? false : _e;
}
