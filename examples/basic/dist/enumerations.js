"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a simple Enumeration.
 */
var Directions;
(function (Directions) {
    /**
     * A simple enum member.
     */
    Directions[Directions["Top"] = 0] = "Top";
    /**
     * A simple enum member.
     */
    Directions[Directions["Right"] = 1] = "Right";
    /**
     * A simple enum member.
     */
    Directions[Directions["Bottom"] = 2] = "Bottom";
    /**
     * A simple enum member.
     */
    Directions[Directions["Left"] = 3] = "Left";
    /**
     * A composite enum member.
     */
    Directions[Directions["TopLeft"] = 3] = "TopLeft";
    /**
     * A composite enum member.
     */
    Directions[Directions["TopRight"] = 1] = "TopRight";
})(Directions = exports.Directions || (exports.Directions = {}));
/**
 * This is a enumeration extended by a module.
 *
 * You should see both the enum members and the module members.
 */
var Size;
(function (Size) {
    /**
     * A simple enum member.
     */
    Size[Size["Small"] = 0] = "Small";
    /**
     * A simple enum member.
     */
    Size[Size["Medium"] = 1] = "Medium";
    /**
     * A simple enum member.
     */
    Size[Size["Large"] = 2] = "Large";
})(Size = exports.Size || (exports.Size = {}));
/**
 * This comment is ignored, as the enumeration is already defined.
 */
(function (Size) {
    /**
     * A variable that is attached to an enumeration.
     */
    var defaultSize = Size.Medium;
    /**
     * A function that is attached to an enumeration.
     *
     * @param value The value that should be tested.
     * @returns TRUE when the given value equals Size.Small.
     */
    function isSmall(value) {
        return value == Size.Small;
    }
})(Size = exports.Size || (exports.Size = {}));
