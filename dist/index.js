"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Call_1 = require("./classess/Call");
var Phone_1 = require("./classess/Phone");
var models_1 = require("./models/models");
function main() {
    var phone = new Phone_1.Phone("iPhone", "Apple", 1000, "Dara", { hoursIdle: 100, hoursTalk: 100, model: models_1.BatteryType.LiIon }, { size: 20, colors: 30 });
    console.log(phone);
    var currentCall = new Call_1.Call(10, "11.01.2022", "0885729141", 3);
    console.log(currentCall);
}
main();
