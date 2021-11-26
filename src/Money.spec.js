import { Money } from "./Money";

describe('Money', () => {
    it('should initialize with currency Euro', () => {
        const money = new Money(10,34);
        expect(money.currency).toBe('EUR');
    });
});