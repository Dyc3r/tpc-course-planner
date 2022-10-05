import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class Archaeology extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Archaeology',
            3,
            [
                { year: 1, rooms: [RoomCode.DS, RoomCode.DS, RoomCode.LT] },
                { year: 2, rooms: [RoomCode.CL, RoomCode.DS, RoomCode.DS] },
                { year: 3, rooms: [RoomCode.DS, RoomCode.DS, RoomCode.SL] },
            ],
            targetPopulation
        );
    }
}
