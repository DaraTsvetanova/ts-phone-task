import { Call } from "./classess/Call";
import { Phone } from "./classess/Phone";
import { BatteryType } from "./models/models";

function main() {
  const phone: Phone = new Phone(
    "iPhone",
    "Apple",
    1000,
    "Dara",
    { hoursIdle: 100, hoursTalk: 100, model: BatteryType.LiIon },
    { size: 20, colors: 30 }
  );
  console.log(phone);

  const currentCall = phone.call(10, "11.01.2022", "0885729141", 3);

  console.log(currentCall);
}

main();
