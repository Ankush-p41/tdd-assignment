import { Invoice } from "../src/billing";

function createExpectedInvoiceString(
    openSeat: number, 
    cabinSeat: number, 
    conferenceRoomHours: number, 
    meals: number,
    openSeatCost: number, 
    cabinSeatCost: number, 
    conferenceRoomHoursCost: number,
    mealsCost: number,
    totalCost: number,
    GST: number
): string {
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
});