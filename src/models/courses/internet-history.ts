import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class InternetHistory extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Internet History',
            3,
            [
                { year: 1, rooms: [RoomCode.CL, RoomCode.CL, RoomCode.LT] },
                { year: 2, rooms: [RoomCode.CL, RoomCode.LT, RoomCode.VR] },
                { year: 3, rooms: [RoomCode.CL, RoomCode.LT, RoomCode.VR] },
            ],
            targetPopulation
        );
    }
}
