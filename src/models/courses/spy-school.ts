import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class SpySchool extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Spy School',
            3,
            [
                { year: 1, rooms: [RoomCode.GL, RoomCode.GL, RoomCode.LT] },
                { year: 2, rooms: [RoomCode.LT, RoomCode.PAN, RoomCode.PAN] },
                { year: 3, rooms: [RoomCode.CL, RoomCode.GL, RoomCode.PAN] },
            ],
            targetPopulation
        );
    }
}
