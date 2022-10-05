import { Room } from './room';

export class VRLab extends Room {
    constructor(quantity: number) {
        super('VR Lab', 35100, { l: 4, w: 5 }, quantity);
    }
}
