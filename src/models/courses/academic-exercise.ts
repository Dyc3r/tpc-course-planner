import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class AcademicExercise extends Course {
    constructor(targetPopulation = 8) {
        super(
            'Academic Exercise',
            3,
            [
                { year: 1, rooms: [RoomCode.CBF, RoomCode.CBF, RoomCode.LT] },
                { year: 2, rooms: [RoomCode.CBF, RoomCode.GYM, RoomCode.GYM] },
                { year: 3, rooms: [RoomCode.CBF, RoomCode.GYM, RoomCode.LT] },
            ],
            targetPopulation
        );
    }
}
