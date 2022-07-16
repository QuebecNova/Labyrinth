import { ISquare } from './ISquare';

export enum Difficulty {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard"
}

export interface IGame {
    started: boolean,
    arrowsNumber: number,
    squares: ISquare[]
}