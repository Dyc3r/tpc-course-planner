import { Room } from './room';

export class RoboDesign extends Room {
    constructor(quantity: number) {
        super('Robo Design', 45700, { l: 4, w: 4 }, quantity);
    }
}
