import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class MoneyWangling extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Money Wangling',
            2,
            [
                { year: 1, rooms: [RoomCode.CL, RoomCode.LT, RoomCode.LT] },
                { year: 2, rooms: [RoomCode.CL, RoomCode.CL, RoomCode.LT] },
            ],
            targetPopulation
        );
    }
}
