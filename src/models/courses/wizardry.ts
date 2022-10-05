import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class Wizardry extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Wizardry',
            3,
            [
                { year: 1, rooms: [RoomCode.LT, RoomCode.POT, RoomCode.POT] },
                { year: 2, rooms: [RoomCode.LT, RoomCode.POT, RoomCode.SR] },
                { year: 3, rooms: [RoomCode.LT, RoomCode.SR, RoomCode.SR] },
            ],
            targetPopulation
        );
    }
}
