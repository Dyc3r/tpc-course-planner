import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class KnightSchool extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Knight School',
            3,
            [
                { year: 1, rooms: [RoomCode.BG, RoomCode.BG, RoomCode.LT] },
                { year: 2, rooms: [RoomCode.LT, RoomCode.JF, RoomCode.BG] },
                { year: 3, rooms: [RoomCode.LT, RoomCode.JF, RoomCode.JF] },
            ],
            targetPopulation
        );
    }
}
