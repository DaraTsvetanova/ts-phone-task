export class Call {
  private timeOfCall: number;
  private dateOfCall: string;
  private dialedPhoneNumber: string;
  private callDuration: number;

  get TimeOfCall(): number {
    return this.timeOfCall;
  }

  get Duration(): number {
    return this.callDuration;
  }

  set Duration(value: number) {
    this.callDuration = value;
  }

  constructor(
    timeOfCall: number,
    dateOfCall: string,
    dialedPhoneNumber: string,
    callDuration: number
  ) {
    this.callDuration = callDuration;
    this.dateOfCall = dateOfCall;
    this.dialedPhoneNumber = dialedPhoneNumber;
    this.timeOfCall = timeOfCall;
  }
}
