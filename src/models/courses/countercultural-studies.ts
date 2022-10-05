import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class CounterculturalStudies extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Countercultural Studies',
            2,
            [
                { year: 1, rooms: [RoomCode.GYM, RoomCode.LT, RoomCode.LT] },
                { year: 2, rooms: [RoomCode.GYM, RoomCode.LT, RoomCode.LT] },
            ],
            targetPopulation
        );
    }
}
