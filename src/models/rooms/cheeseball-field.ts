import { Room } from './room';

export class CheeseballField extends Room {
    constructor(quantity: number) {
        super('Cheeseball Field', 35100, { l: 9, w: 14 }, quantity);
    }
}
