import { Room } from './room';

export class RecordingStudio extends Room {
    constructor(quantity: number) {
        super('Recording Studio', 11600, { l: 4, w: 4 }, quantity);
    }
}
