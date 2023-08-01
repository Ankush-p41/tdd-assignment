import { Invoice } from "../src/Invoice";

function createExpectedInvoiceString(openSeat: number, cabinSeat: number, conferenceRoomHours: number, meals: number,openSeatCost: number, cabinSeatCost: number, conferenceRoomHoursCost: number, mealsCost: number, totalCost: number, GST: number): string {
          const invoice = `
        Monthly Invoice
        ${openSeat} Open Seats: Rs. ${openSeatCost}
        ${cabinSeat} Cabin Seats: Rs. ${cabinSeatCost}
        ${conferenceRoomHours} hours of Conference Room usage: Rs. ${conferenceRoomHoursCost}
        ${meals} Meals: Rs. ${mealsCost}
        Total: Rs. ${totalCost}
        Total GST: ${GST}
        `;

        return invoice;
}

describe("Invoice", () => {
    test("should print invoice as 11800 when only 2 open seats are booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 0;
        const conferenceRoomHours: number = 0;
        const meals: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(createExpectedInvoiceString(openSeat,cabinSeat,conferenceRoomHours,meals, 11800, 0,0,0,11800,1800));
    });

    test("should print invoice as 35400 when only 3 cabin seats are booked", () => {
        const openSeat: number = 0;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 0;
        const meals: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(createExpectedInvoiceString(openSeat,cabinSeat,conferenceRoomHours,meals, 0, 35400,0,0,35400,5400));
    });

    test("should print invoice as 47200 when 2 open seats, 3 cabin seats are booked and 35 hours of conference room is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 35;
        const meals: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(createExpectedInvoiceString(openSeat,cabinSeat,conferenceRoomHours,meals, 11800, 35400,0,0,47200,7200));
    });

    test("should print invoice as 47200 when 2 open seats, 3 cabin seats are booked and 35 hours of conference room is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 50;
        const meals: number = 0;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(createExpectedInvoiceString(openSeat,cabinSeat,conferenceRoomHours,meals, 11800, 35400,2360,0,49560,7560));
    });

    test("should print invoice as 47760 when 2 open seats, 3 cabin seats are booked, 35 hours of conference room and 5 meals is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 3;
        const conferenceRoomHours: number = 35;
        const meals: number = 5;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(createExpectedInvoiceString(openSeat,cabinSeat,conferenceRoomHours,meals, 11800, 35400,0,560,47760,7260));
    });

    test("should print invoice as 22360 when 0 open seats, 1 cabin seats are booked, 50 hours of conference room and 10 meals is booked", () => {
        const openSeat: number = 0;
        const cabinSeat: number = 1;
        const conferenceRoomHours: number = 50;
        const meals: number = 10;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(createExpectedInvoiceString(openSeat,cabinSeat,conferenceRoomHours,meals, 0, 11800,9440,1120,22360,3360));
    });

    test("should print invoice as 15160 when 2 open seats, 0 cabin seats are booked, 0 hours of conference room and 30 meals is booked", () => {
        const openSeat: number = 2;
        const cabinSeat: number = 0;
        const conferenceRoomHours: number = 0;
        const meals: number = 30;
        expect(new Invoice().print(openSeat, cabinSeat, conferenceRoomHours,meals)).toEqual(createExpectedInvoiceString(openSeat,cabinSeat,conferenceRoomHours,meals, 11800, 0,0,3360.0000000000005,15160,2160));
    });
});