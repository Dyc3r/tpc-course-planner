import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class DarkArt extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Dark Art',
            2,
            [
                { year: 1, rooms: [RoomCode.LT, RoomCode.LT, RoomCode.LT] },
                { year: 2, rooms: [RoomCode.LT, RoomCode.POT, RoomCode.POT] },
            ],
            targetPopulation
        );
    }
}
