import { Room } from './room';

export class RoboConstruction extends Room {
    constructor(quantity: number) {
        super('Robo Construction', 25700, { l: 6, w: 6 }, quantity);
    }
}
