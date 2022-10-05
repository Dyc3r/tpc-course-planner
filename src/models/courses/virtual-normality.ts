import { RoomCode } from '../../interfaces';
import { Course } from './course';

export class VirtualNormality extends Course {
    constructor(targetPopulation = 8) {
        super(
            'VirtualNormality',
            3,
            [
                { year: 1, rooms: [RoomCode.LT, RoomCode.VR, RoomCode.VR] },
                { year: 3, rooms: [RoomCode.LT, RoomCode.VR, RoomCode.VR] },
                { year: 2, rooms: [RoomCode.LT, RoomCode.VR, RoomCode.VR] },
            ],
            targetPopulation
        );
    }
}
