import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class Gastronomy extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Gastronomy',
            3,
            [
                { year: 1, rooms: [RoomCode.LT, RoomCode.SAV, RoomCode.SAV] },
                { year: 2, rooms: [RoomCode.LT, RoomCode.SAV, RoomCode.SWT] },
                { year: 3, rooms: [RoomCode.SAV, RoomCode.SL, RoomCode.SWT] },
            ],
            targetPopulation
        );
    }
}
