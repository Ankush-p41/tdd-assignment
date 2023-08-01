import { Invoice } from "../src/Invoice";

describe("Invoice", () => {
    test("should print invoice as 11800 when only 2 open seats are booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 0;
        const conferenceRoomHours: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours)).toEqual(11800);
    });

    test("should print invoice as 35400 when only 3 cabin seats are booked", () => {
        const openSeat: number = 0;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours)).toEqual(35400);
    });

    test("should print invoice as 47200 when 2 open seats, 3 cabin seats are booked and 35 hours of conference room is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 35;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours)).toEqual(47200);
    });

    test("should print invoice as 47200 when 2 open seats, 3 cabin seats are booked and 35 hours of conference room is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 50;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours)).toEqual(49560);
    });
});