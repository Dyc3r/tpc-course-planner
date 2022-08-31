import * as Rooms from '../models/rooms';
import { IRoom as Room, RoomCode } from '../interfaces';

/**
 * This is a utility function to return an instance of a Room object given the
 * specified RoomCode. The actual number of a given room needed in a year is
 * dependent on the student population, so the _course_ itself doesn't actually
 * have an instance of the room -- just a reference to it via the code.
 *
 * NOTE: As of right now, based on planned functionality, it makes the most sense
 * to generate a single instance of the room objects with a _quantity_ reflecting
 * how many copies of the room are needed in the campus.
 *
 * @param  code The identifying code for the room we need to build
 * @return      Returns the generated room instance
 */
export const buildRoom = (code: RoomCode, quantity: number): Room => {
    switch (code) {
        case RoomCode.BG: return new Rooms.Battleground(quantity);
        case RoomCode.CBF: return new Rooms.CheeseballField(quantity);
        case RoomCode.CL: return new Rooms.ComputerLab(quantity);
        case RoomCode.DS: return new Rooms.DigSite(quantity);
        case RoomCode.GL: return new Rooms.GadgetLab(quantity);
        case RoomCode.GYM: return new Rooms.Gym(quantity);
        case RoomCode.JF: return new Rooms.JoustingField(quantity);
        case RoomCode.LT: return new Rooms.LectureTheater(quantity);
        case RoomCode.PAN: return new Rooms.PanicRoom(quantity);
        case RoomCode.POT: return new Rooms.PotionsRoom(quantity);
        case RoomCode.RS: return new Rooms.RecordingStudio(quantity);
        case RoomCode.RC: return new Rooms.RoboConstruction(quantity);
        case RoomCode.RD: return new Rooms.RoboDesign(quantity);
        case RoomCode.SAV: return new Rooms.SavoryKitchen(quantity);
        case RoomCode.SL: return new Rooms.ScienceLab(quantity);
        case RoomCode.SR: return new Rooms.SpellsRoom(quantity);
        case RoomCode.SWT: return new Rooms.SweetKitchen(quantity);
        case RoomCode.VR: return new Rooms.VRLab(quantity);
    }
};
