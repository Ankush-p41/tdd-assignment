import { Invoice } from "../src/Invoice";

describe("Invoice", () => {
    test("should print invoice as 11800 when only 2 open seats are booked", () => {
        const openSeat: number = 2;
        expect(new Invoice().print(openSeat)).toEqual(11800);
    });
});