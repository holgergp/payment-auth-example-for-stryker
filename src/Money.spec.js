import { Money } from "./Money";

describe("Money", () => {
  it("should initialize with currency Euro", () => {
    const money = new Money(10, 34);
    expect(money.currency).toBe("EUR");
  });

  it("should compute a sane toCents", () => {
    const money = new Money(10, 34);
    expect(money.toCents()).toEqual(1034);
  });
});
