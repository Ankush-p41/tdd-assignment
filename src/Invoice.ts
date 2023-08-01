const OpenSeatPrice: number = 5000;
const OpenSeatGST: number = 1.18;
const cabinSeatPrice: number = 10000;
const CabinSeatGST: number = 1.18;
export class Invoice {
    constructor() {
    }


    print(openSeat: number, cabinSeat: number): number {
        
        const openSeatCost = this.calculateOpenSeatCost(openSeat);
        const cabinSeatCost = this.calculateCabinSeatCost(cabinSeat);
        const openSeatCostWithGST = this.calculateOpenSeatGST(openSeatCost);
        const cabinSeatCostWithGST = this.calculateCabinSeatGST(cabinSeatCost);
        
        return openSeatCostWithGST+cabinSeatCostWithGST;
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

