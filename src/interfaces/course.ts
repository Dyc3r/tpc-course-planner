import type { RoomCode } from './room';

export interface ICourse {
    name: string;
    duration: number;
    courseYears: CourseYear[];
    targetPopulation: number;
    intake: number;
}

export interface CourseYear {
    year: 1|2|3|4;
    rooms: RoomCode[];
}
