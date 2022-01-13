"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(model, manufacturer, price, owner, battery, display, callHistory) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.price = price;
        this.owner = owner;
        this.battery = battery;
        this.display = display;
        this.callHistory = callHistory;
    }
    Phone.prototype.phoneInfo = function () {
        return "Phone info: Owner ".concat(this.owner, " Manufacturer: ").concat(this.manufacturer, " Price: ").concat(this.price, " Battery: ").concat(this.battery, " Display: ").concat(this.display);
    };
    Phone.prototype.addCall = function (call) {
        if (!this.callHistory) {
            this.callHistory = [];
        }
        this.callHistory.push(call);
    };
    Phone.prototype.deleteCall = function (call) {
        if (!this.callHistory) {
            return;
        }
        this.callHistory = this.callHistory.filter(function (currentCall) {
            if (currentCall.TimeOfCall === call.TimeOfCall) {
                return true;
            }
            return false;
        });
    };
    Phone.prototype.clearHistoryCalls = function () {
        this.callHistory = [];
    };
    Phone.prototype.calculateCallPrice = function (pricePerMinute) { };
    return Phone;
}());
exports.Phone = Phone;
