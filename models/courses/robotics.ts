import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class Robotics extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Robotics',
            3,
            [
                { year: 1, rooms: [RoomCode.LT, RoomCode.RC, RoomCode.RC] },
                { year: 2, rooms: [RoomCode.LT, RoomCode.RC, RoomCode.RD] },
                { year: 3, rooms: [RoomCode.LT, RoomCode.RC, RoomCode.RD] },
            ],
            targetPopulation
        );
    }
}
