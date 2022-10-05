import { Room } from './room';

export class Gym extends Room {
    constructor(quantity: number) {
        super('Gym', 9100, { l: 4, w: 3 }, quantity);
    }
}
