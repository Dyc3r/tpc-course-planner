import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class FunnyBusiness extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Funny Business',
            2,
            [
                { year: 1, rooms: [RoomCode.LT, RoomCode.LT, RoomCode.SL] },
                { year: 2, rooms: [RoomCode.LT, RoomCode.LT, RoomCode.SL] },
            ],
            targetPopulation
        );
    }
}
