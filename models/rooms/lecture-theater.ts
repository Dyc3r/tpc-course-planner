import { Room } from './room';

export class LectureTheater extends Room {
    constructor(quantity: number) {
        super('Lecture Theater', 21300, { l: 4, w: 4 }, quantity);
    }
}
