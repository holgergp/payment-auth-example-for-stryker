export class Money {
  constructor(majorAmount, minorAmount) {
    this.majorAmount = majorAmount;
    this.minorAmount = minorAmount;
    this.currency = "EUR";
  }
  toCents() {
    return this.majorAmount * 10 * 10 + this.minorAmount;
  }
  compareTo(other) {
    return this.toCents() - other.toDecimal();
  }
}
