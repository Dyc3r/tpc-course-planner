import { Room } from './room';

export class SavoryKitchen extends Room {
    constructor(quantity: number) {
        super('Savory Kitchen', 30100, { l: 6, w: 6 }, quantity);
    }
}
