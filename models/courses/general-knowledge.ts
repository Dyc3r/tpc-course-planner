import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class GeneralKnowledge extends Course {
    constructor(targetPopulation = 8) {
        super(
            'General Knowledge',
            1,
            [{ year: 1, rooms: [RoomCode.LT, RoomCode.LT, RoomCode.LT] }],
            targetPopulation
        );
    }
}
