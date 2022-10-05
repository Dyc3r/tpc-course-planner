import { Room } from './room';

export class DigSite extends Room {
    constructor(quantity: number) {
        super('Dig Site', 10100, { l: 7, w: 7 }, quantity);
    }
}
