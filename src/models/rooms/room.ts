import { IRoom } from '../../interfaces';

export abstract class Room implements IRoom {
    name: string;
    baseCost: number;
    size: { l: number, w: number };
    quantity: number;

    constructor(name: string, baseCost: number, size: { l: number, w: number }, quantity: number) {
        this.name = name;
        this.baseCost = baseCost;
        this.size = size;
        this.quantity = quantity;
    }
}
