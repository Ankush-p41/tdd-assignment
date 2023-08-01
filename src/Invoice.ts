const OpenSeatPrice: number = 5000;
const OpenSeatGST: number = 1.18;
const cabinSeatPrice: number = 10000;
const CabinSeatGST: number = 1.18;
const OpenSeatConferenceRoomHour: number = 5;
const CabinSeatConferenceRoomHour: number = 10;
const ConferenceRoomCost: number = 200;
const conferenceRoomGST: number = 1.18;
export class Invoice {
    constructor() {
    }


    print(openSeat: number, cabinSeat: number, conferenceRoomHours: number): number {
        
        const openSeatCost = this.calculateOpenSeatCost(openSeat);
        const cabinSeatCost = this.calculateCabinSeatCost(cabinSeat);
        const openSeatCostWithGST = this.calculateOpenSeatGST(openSeatCost);
        const cabinSeatCostWithGST = this.calculateCabinSeatGST(cabinSeatCost);
        const conferenceRoomCost = this.calculateConferenceRoomCost(openSeat, cabinSeat, conferenceRoomHours);
        const conferenceRoomCostWithGST = this.calculateConferenceRoomGST(conferenceRoomCost);

        return openSeatCostWithGST+cabinSeatCostWithGST+conferenceRoomCostWithGST;
    }
    
    calculateConferenceRoomGST(conferenceRoomCost: number): number {
        const totalOpenSeatCost = conferenceRoomCost*conferenceRoomGST;
        return totalOpenSeatCost;
    }

    calculateConferenceRoomCost(openSeat: number, cabinSeat: number, conferenceRoomHours: number): number {
        
        const freeOpenSeatHour = openSeat*OpenSeatConferenceRoomHour;
        const freeCabinSeatHour = cabinSeat*CabinSeatConferenceRoomHour;
        const unpaidConferenceRoomHour = conferenceRoomHours - freeOpenSeatHour - freeCabinSeatHour
        if(unpaidConferenceRoomHour > 0){
            return unpaidConferenceRoomHour*ConferenceRoomCost;
        }
        else{
            return 0;
        }
    }

    private calculateOpenSeatGST(openSeatCost: number) {
        const totalOpenSeatCost = openSeatCost*OpenSeatGST;
        return totalOpenSeatCost;
    }

    private calculateOpenSeatCost(openSeat: number): number  {
        const cost = openSeat*OpenSeatPrice;
        return cost;
    }

    private calculateCabinSeatGST(cabinSeatCost: number) {
        const totalOpenSeatCost = cabinSeatCost*CabinSeatGST;
        return totalOpenSeatCost;
    }

    private calculateCabinSeatCost(cabinSeat: number): number  {
        const cost = cabinSeat*cabinSeatPrice;
        return cost;
    }
}

