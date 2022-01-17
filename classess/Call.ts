export class Call {
  private _timeOfCall: number;
  private _dateOfCall: string;
  private _dialedPhoneNumber: string;
  private _callDuration: number;

  get timeOfCall(): number {
    return this.timeOfCall;
  }

  get duration(): number {
    return this._callDuration;
  }

  set duration(value: number) {
    this._callDuration = value;
  }

  constructor(
    timeOfCall: number,
    dateOfCall: string,
    dialedPhoneNumber: string,
    callDuration: number
  ) {
    this._callDuration = callDuration;
    this._dateOfCall = dateOfCall;
    this._dialedPhoneNumber = dialedPhoneNumber;
    this._timeOfCall = timeOfCall;
  }
}
