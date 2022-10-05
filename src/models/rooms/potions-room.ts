import { Room } from './room';

export class PotionsRoom extends Room {
    constructor(quantity: number) {
        super('PotionsRoom', 16100, { l: 6, w: 6 }, quantity);
    }
}
