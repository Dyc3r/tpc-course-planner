import { Room } from './room';

export class ComputerLab extends Room {
    constructor(quantity: number) {
        super('Computer Lab', 26700, { l: 4, w: 4 }, quantity);
    }
}
