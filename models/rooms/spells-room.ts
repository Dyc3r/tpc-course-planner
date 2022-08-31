import { Room } from './room';

export class SpellsRoom extends Room {
    constructor(quantity: number) {
        super('Spells Room', 15600, { l: 6, w: 6 }, quantity);
    }
}
