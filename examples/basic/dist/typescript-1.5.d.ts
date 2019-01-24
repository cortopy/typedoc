/**
 * Destructuring objects.
 */
declare var destructObjectA: number, destructObjectB: string, destructObjectC: number;
/**
 * Destructuring arrays.
 */
declare var destructArrayA: number, destructArrayB: string, destructArrayC: number;
/**
 * Array Destructuring with rest
 */
declare var destructArrayWithRestA: number, destructArrayWithRestB: number, destructArrayWithRest: [number, number];
/**
 * Array Destructuring with ignores
 */
declare var destructArrayWithIgnoresA: number, destructArrayWithIgnoresRest: [number, number];
/**
 * Destructuring function parameters.
 *
 * @param text This is the text
 * @param location This is the location
 * @param bold Should it be bold?
 */
declare function drawText({ text, location: [x, y], bold }: {
    text?: string;
    location?: [number, number];
    bold?: boolean;
}): void;
