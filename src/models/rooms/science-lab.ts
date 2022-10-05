import { Room } from './room';

export class ScienceLab extends Room {
    constructor(quantity: number) {
        super('Science Lab', 18200, { l: 5, w: 5 }, quantity);
    }
}
