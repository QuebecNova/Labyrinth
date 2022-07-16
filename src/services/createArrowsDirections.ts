interface IArrows {
    arrows: string[],
    endField: number
}

export default function createArrows(arrowsNum : number, startingField: number) : IArrows {
    // Here we creating arrows movements, and set on which square player need click to win
    const arrows = []
    let newField = startingField
    
    // We loop until random number turn is legal for our position in squares 
    // (ex: if we on pos 0 we can't go up or left) => reroll
    let count = 0
    while (count < arrowsNum) {
        const randomNum = Math.random() * 10
        
        const isDownLegal = randomNum < 2.5 && newField < 6
        const isUpLegal = randomNum >= 2.5 && randomNum < 5 && newField > 2
        const isRightLegal = randomNum >= 5 && randomNum < 7.5 && newField !== 2 && newField !== 5 && newField !== 8
        const isLeftLegal = randomNum >= 7.5 && newField !== 0 && newField !== 3 && newField !== 6

        let noLegals = false
        
        switch (true) {
            case isDownLegal:
                arrows.push('down')
                newField += 3
                break
            case isUpLegal:
                arrows.push('up')
                newField -= 3
                break
            case isRightLegal:
                arrows.push('right')
                newField += 1
                break
            case isLeftLegal:
                arrows.push('left')
                newField -= 1
                break
            default: 
                noLegals = true
        }
        
        if (noLegals) {
            continue
        } else {
            count++
        }
    }
    
    const endField = newField
    return {arrows, endField}
}