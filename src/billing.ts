export class Invoice {
    private readonly OPEN_SEAT_COST: number = 5000;
    private readonly OPEN_SEAT_GST: number = 1.18;
    
    private readonly CABIN_SEAT_COST: number = 10000;
    private readonly CABIN_SEAT_GST: number = 1.18;
    
    private readonly CONFERENCE_ROOM_OPEN_SEAT_HOURS: number = 5;
    private readonly CONFERENCE_ROOM_CABIN_SEAT_HOUR: number = 10;
    
    private readonly CONFERENCE_ROOM_PRICE: number = 200;
    private readonly CONFERENCE_ROOM_GST: number = 1.18;
    
    private readonly MEALS_COST: number = 100;
    private readonly MEALS_GST: number = 1.12;
    constructor() {}


    print(
        totalOpenSeats: number, 
        totalCabinSeats: number, 
        totalConferenceRoomHours: number, totalMeals: number): string {
        
        /**
         * This is the total open seat cost that is calculated
         */
        const openSeatCost = this.applyTotal(
            totalOpenSeats, 
            this.OPEN_SEAT_COST
        );
        const cabinSeatCost = this.applyTotal(
            totalCabinSeats, 
            this.CABIN_SEAT_COST
        );
        const mealsCost = this.applyTotal(
            totalMeals, 
            this.MEALS_COST
        );
        const conferenceRoomCost = this.calculateConferenceRoomCost(
            totalOpenSeats, 
            totalCabinSeats, 
            totalConferenceRoomHours
        );
        const conferenceRoomCostWithGST = this.applyGST(
            conferenceRoomCost, 
            this.CONFERENCE_ROOM_GST
        );
        const openSeatCostWithGST = this.applyGST(
            openSeatCost, 
            this.OPEN_SEAT_GST
        );
        const cabinSeatCostWithGST = this.applyGST(
            cabinSeatCost, 
            this.CABIN_SEAT_GST
        );
        const mealsCostWithGST = this.applyGST(
            mealsCost,
            this.MEALS_GST
        );
        
        const totalCost =  openSeatCost + cabinSeatCost + mealsCost + conferenceRoomCost;
        const totalCostWithGST = openSeatCostWithGST + cabinSeatCostWithGST + conferenceRoomCostWithGST+mealsCostWithGST;
        const totalGST = totalCostWithGST - totalCost

        const invoice = `
        Monthly Invoice
        ${totalOpenSeats} Open Seats: Rs. ${openSeatCostWithGST}
        ${totalCabinSeats} Cabin Seats: Rs. ${cabinSeatCostWithGST}
        ${totalConferenceRoomHours} hours of Conference Room usage: Rs. ${conferenceRoomCostWithGST}
        ${totalMeals} Meals: Rs. ${mealsCostWithGST}
        Total: Rs. ${totalCostWithGST}
        Total GST: ${totalGST}
        `;

        return invoice;
    }

    private applyGST(amount: number, gstRate: number): number {
        return amount * gstRate;
    }

    private applyTotal(quantity: number, price: number): number {
        return quantity * price;
    }

    private calculateConferenceRoomCost(
        totalOpenSeats: number, 
        totalCabinSeats: number, 
        totalConferenceRoomHours: number
    ): number {
        const freeOpenSeatHours = totalOpenSeats * this.CONFERENCE_ROOM_OPEN_SEAT_HOURS;
        const freeCabinSeatHours = totalCabinSeats * this.CONFERENCE_ROOM_CABIN_SEAT_HOUR;
        const unpaidConferenceRoomHour = totalConferenceRoomHours - freeOpenSeatHours - freeCabinSeatHours
        if(
            unpaidConferenceRoomHour > 0
        ){
            return unpaidConferenceRoomHour * this.CONFERENCE_ROOM_PRICE;
        }
        return 0;
    }
}

