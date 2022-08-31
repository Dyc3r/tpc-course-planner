import { Room } from './room';

export class JoustingField extends Room {
    constructor(quantity: number) {
        super('Jousting Field', 28100, { l: 12, w: 8 }, quantity);
    }
}
