import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class SchoolOfThought extends Course {
    constructor(targetPopulation = 8) {
        super(
            'School of Thought',
            4,
            [
                { year: 1, rooms: [RoomCode.CL, RoomCode.LT, RoomCode.SL] },
                { year: 2, rooms: [RoomCode.GYM, RoomCode.LT, RoomCode.SL] },
                { year: 3, rooms: [RoomCode.GYM, RoomCode.SL, RoomCode.VR] },
                { year: 4, rooms: [RoomCode.CL, RoomCode.GYM, RoomCode.SL] },
            ],
            targetPopulation
        );
    }
}
