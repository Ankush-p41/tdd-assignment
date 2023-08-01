export class Invoice {
    private readonly OPEN_SEAT_PRICE: number = 5000;
    private readonly OPEN_SEAT_GST: number = 1.18;
    private readonly CABIN_SEAT_PRICE: number = 10000;
    private readonly CABIN_SEAT_GST: number = 1.18;
    private readonly OPEN_SEAT_CONFERENCE_ROOM_HOUR: number = 5;
    private readonly CABIN_SEAT_CONFERENCE_ROOM_HOUR: number = 10;
    private readonly CONFERENCE_ROOM_PRICE: number = 200;
    private readonly CONFERENCE_ROOM_GST: number = 1.18;
    private readonly MEALS_COST: number = 100;
    private readonly MEALS_GST: number = 1.12;
    constructor() {
    }


    print(openSeat: number, cabinSeat: number, conferenceRoomHours: number, meals: number): number {
        
        const openSeatCost = this.calculateOpenSeatCost(openSeat);
        const cabinSeatCost = this.calculateCabinSeatCost(cabinSeat);
        const openSeatCostWithGST = this.calculateGST(openSeatCost, this.OPEN_SEAT_GST);
        const cabinSeatCostWithGST = this.calculateGST(cabinSeatCost, this.CABIN_SEAT_GST);
        const conferenceRoomCost = this.calculateConferenceRoomCost(openSeat, cabinSeat, conferenceRoomHours);
        const conferenceRoomCostWithGST = this.calculateGST(conferenceRoomCost, this.CONFERENCE_ROOM_GST );
        const mealsCost = this.calculateMealsCost(meals);
        const mealsCostWithGST = this.calculateGST(mealsCost,this.MEALS_GST);

        return openSeatCostWithGST+cabinSeatCostWithGST+conferenceRoomCostWithGST+mealsCostWithGST;
    }

    private calculateConferenceRoomCost(openSeat: number, cabinSeat: number, conferenceRoomHours: number): number {
        
        const freeOpenSeatHour = openSeat*this.OPEN_SEAT_CONFERENCE_ROOM_HOUR;
        const freeCabinSeatHour = cabinSeat*this.CABIN_SEAT_CONFERENCE_ROOM_HOUR;
        const unpaidConferenceRoomHour = conferenceRoomHours - freeOpenSeatHour - freeCabinSeatHour
        if(unpaidConferenceRoomHour > 0){
            return unpaidConferenceRoomHour*this.CONFERENCE_ROOM_PRICE;
        }
        else{
            return 0;
        }
    }

    private calculateOpenSeatCost(openSeat: number): number  {
        const cost = openSeat*this.OPEN_SEAT_PRICE;
        return cost;
    }

    private calculateCabinSeatCost(cabinSeat: number): number  {
        const cost = cabinSeat*this.CABIN_SEAT_PRICE;
        return cost;
    }


    private calculateMealsCost(meals: number): number  {
        const cost = meals*this.MEALS_COST;
        return cost;
    }

    private calculateGST(amount: number, gstRate: number): number {
    return amount * gstRate;
  }
}

