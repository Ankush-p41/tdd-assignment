import { Invoice } from "../src/Invoice";

describe("Invoice", () => {
    test("should print invoice as 11800 when only 2 open seats are booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 0;
        const conferenceRoomHours: number = 0;
        const meals: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(11800);
    });

    test("should print invoice as 35400 when only 3 cabin seats are booked", () => {
        const openSeat: number = 0;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 0;
        const meals: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(35400);
    });

    test("should print invoice as 47200 when 2 open seats, 3 cabin seats are booked and 35 hours of conference room is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 35;
        const meals: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(47200);
    });

    test("should print invoice as 47200 when 2 open seats, 3 cabin seats are booked and 35 hours of conference room is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 50;
        const meals: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(49560);
    });

    test("should print invoice as 47760 when 2 open seats, 3 cabin seats are booked, 35 hours of conference room and 5 meals is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 35;
        const meals: number = 5;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(47760);
    });

    test("should print invoice as 47760 when 2 open seats, 3 cabin seats are booked, 35 hours of conference room and 5 meals is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 35;
        const meals: number = 5;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(47760);
    });

    test("should print invoice as 47760 when 0 open seats, 1 cabin seats are booked, 50 hours of conference room and 10 meals is booked", () => {
        const openSeat: number = 0;
        const cabinSeat: number = 1;
        const conferenceRoomHours: number = 50;
        const meals: number = 10;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(22360);
    });

    test("should print invoice as 47760 when 2 open seats, 0 cabin seats are booked, 0 hours of conference room and 30 meals is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 0;
        const conferenceRoomHours: number = 0;
        const meals: number = 30;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(15160);
    });
});