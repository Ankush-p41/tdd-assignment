const OpenSeatPrice: number = 5000;
const OpenSeatGST: number = 1.18;
export class Invoice {
    constructor() {
    }


    print(openSeat: number): number {
        
        const openSeatCost = this.calculateOpenSeatCost(openSeat);
        const openSeatCostWithGST = this.calculateGST(openSeatCost);
        
        return openSeatCostWithGST;
    }

    private calculateGST(openSeatCost: number) {
        const totalOpenSeatCost = openSeatCost*OpenSeatGST;
        return totalOpenSeatCost;
    }

    private calculateOpenSeatCost(openSeat: number): number  {
        const cost = openSeat*OpenSeatPrice;
        return cost;
    }
}

