import { Invoice } from "../src/Invoice";

describe("Invoice", () => {
    test("should print invoice as 11800 when only 2 open seats are booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat)).toEqual(11800);
    });

    test("should print invoice as 35400 when only 3 cabin seats are booked", () => {
        const openSeat: number = 0;
        const cabinSeat: number = 3;
        expect(new Invoice().print(openSeat, cabinSeat)).toEqual(35400);
    });
});