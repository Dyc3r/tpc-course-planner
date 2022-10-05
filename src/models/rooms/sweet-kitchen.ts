import { Room } from './room';

export class SweetKitchen extends Room {
    constructor(quantity: number) {
        super('Sweet Kitchen', 35100, { l: 6, w: 5 }, quantity);
    }
}
