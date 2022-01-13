import { PhoneModel, BatteryModel, DisplayModel } from "../models/models";
import { Call } from "./Call";

export class Phone implements PhoneModel {
  model: string;
  manufacturer: string;
  price: number;
  owner: string;
  battery: BatteryModel;
  display: DisplayModel;
  callHistory: Call[];

  constructor(
    model: string,
    manufacturer: string,
    price?: number,
    owner?: string,
    battery?: BatteryModel,
    display?: DisplayModel,
    callHistory?: Call[]
  ) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.price = price;
    this.owner = owner;
    this.battery = battery;
    this.display = display;
    this.callHistory = callHistory;
  }

  public phoneInfo(): string {
    return `Phone info: Owner ${this.owner} Manufacturer: ${this.manufacturer} Price: ${this.price} Battery: ${this.battery} Display: ${this.display}`;
  }

  public addCall(call: Call) {
    if (!this.callHistory) {
      this.callHistory = [];
    }
    this.callHistory.push(call);
  }

  public deleteCall(call: Call) {
    if (!this.callHistory) {
      return;
    }
    this.callHistory = this.callHistory.filter((currentCall) => {
      if (currentCall.TimeOfCall === call.TimeOfCall) {
        return true;
      }
      return false;
    });
  }

  public clearHistoryCalls() {
    this.callHistory = [];
  }

  public calculateCallPrice(pricePerMinute: number) {
    if (!this.callHistory) {
      console.log("The cost is 0.00$");
    } else {
      let totalTime = 0;
      let totalPrice = 0;
      this.callHistory.forEach((call) => {
        totalTime += call.Duration;
        totalPrice += call.Duration * pricePerMinute;
      });
      console.log(`The cost is ${totalPrice.toFixed(2)}$`);
    }
  }
}
