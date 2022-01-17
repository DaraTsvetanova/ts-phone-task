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
    if (!this.owner) {
      return `Owner name is missing`;
    } else if (!this.price) {
      return `Price is missing`;
    } else if (!this.battery) {
      return `Battery type is missing`;
    } else if (!this.display) {
      return `Display type is missing`;
    } else {
      return `
    Phone info: 
    Owner ${this.owner} 
    Model: ${this.model}
    Manufacturer: ${this.manufacturer} 
    Price: ${this.price} 
    Battery: ${this.battery} 
    Display: ${this.display}`;
    }
  }

  public call(
    time: number,
    date: string,
    phoneNumber: string,
    duration: number
  ): void {
    const newCall = new Call(time, date, phoneNumber, duration);
    this.addCall(newCall);
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
      if (currentCall.timeOfCall === call.timeOfCall) {
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
        totalTime += call.duration;
        totalPrice += call.duration * pricePerMinute;
      });
      console.log(`The cost is ${totalPrice.toFixed(2)}$`);
    }
  }
}
