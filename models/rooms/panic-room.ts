import { Room } from './room';

export class PanicRoom extends Room {
    constructor(quantity: number) {
        super('Panic Room', 35100, { l: 12, w: 5 }, quantity);
    }
}
