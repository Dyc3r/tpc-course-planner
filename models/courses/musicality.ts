import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class Musicality extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Musicality',
            3,
            [
                { year: 1, rooms: [RoomCode.LT, RoomCode.RS, RoomCode.RS] },
                { year: 2, rooms: [RoomCode.CL, RoomCode.LT, RoomCode.RS] },
                { year: 3, rooms: [RoomCode.LT, RoomCode.RS, RoomCode.RS] },
            ],
            targetPopulation
        );
    }
}
