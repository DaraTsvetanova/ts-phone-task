import { Call } from "../classess/Call";

export interface PhoneModel {
  model: string;
  manufacturer: string;
  price: number;
  owner: string;
  battery: BatteryModel;
  display: DisplayModel;
  phoneInfo(): string;
}

export interface BatteryModel {
  model: BatteryType;
  hoursIdle: number;
  hoursTalk: number;
}

export interface DisplayModel {
  size: number;
  colors: number;
}

export enum BatteryType {
  LiIon = "LI_ION",
  NiMH = "NIMH",
  NiCd = "NICD",
}
