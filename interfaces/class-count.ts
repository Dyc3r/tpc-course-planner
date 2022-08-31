import { RoomCount } from './room-count';

export interface ClassCount {
    year: number;
    /*  NOTE: This particular count is how many times the roomtype  is _used_
    within the given year. Not how many copies of the room you need to build  */
    counts: RoomCount[];
}
