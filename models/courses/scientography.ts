import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class Scientography extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Scientography',
            3,
            [
                { year: 1, rooms: [RoomCode.LT, RoomCode.SL, RoomCode.SL] },
                { year: 2, rooms: [RoomCode.LT, RoomCode.LT, RoomCode.SL] },
                { year: 3, rooms: [RoomCode.LT, RoomCode.SL, RoomCode.SL] },
            ],
            targetPopulation
        );
    }
}
