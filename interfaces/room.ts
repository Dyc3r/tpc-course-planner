export interface IRoom {
    name: string;
    baseCost: number;
    size: { l: number, w: number };
    quantity: number;
}

export enum RoomCode {
    BG = 'BG', // Battleground
    CBF = 'CBF', // CheeseballField
    CL = 'CL', // ComputerLab
    DS = 'DS', // DigSite
    GL = 'GL', // GadgetLab
    GYM = 'GYM', // Gym
    JF = 'JF', // JoustingField
    LT = 'LT', // LectureTheater
    PAN = 'PAN', // PanicRoom
    POT = 'POT', // POT
    RS = 'RS', // RecordingStudio
    RC = 'RC', // RoboContruction
    RD = 'RD', // RoboDesign
    SAV = 'SAV', // SavoryKitchen
    SL = 'SL', // ScienceLab
    SR = 'SR', // SpellsRoom
    SWT = 'SWT', // SweetKitchen
    VR = 'VR', // VRLab
}
