import { Room } from './room';

export class Battleground extends Room {
    constructor(quantity: number) {
        super('Battleground', 18100, { l: 5, w: 5 }, quantity);
    }
}
