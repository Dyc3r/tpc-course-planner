import { Room } from './room';

export class GadgetLab extends Room {
    constructor(quantity: number) {
        super('Gadget Lab', 3011, { l: 6, w: 5 }, quantity);
    }
}
