"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
var Call = /** @class */ (function () {
    function Call(timeOfCall, dateOfCall, dialedPhoneNumber, callDuration) {
        this.callDuration = callDuration;
        this.dateOfCall = dateOfCall;
        this.dialedPhoneNumber = dialedPhoneNumber;
        this.timeOfCall = timeOfCall;
    }
    Object.defineProperty(Call.prototype, "TimeOfCall", {
        get: function () {
            return this.timeOfCall;
        },
        enumerable: false,
        configurable: true
    });
    return Call;
}());
exports.Call = Call;
