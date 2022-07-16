import { ISquare } from "../types/ISquare"

export default function createSquares() : ISquare[] {
    const squares : ISquare[] = []
    for (let i = 0; i < 9; i++) {
        squares.push({
            id: i,
            playerHere: false,
            startingField: false,
            endHere: false,
        }) 
    }
    return squares
}