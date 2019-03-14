function topHand (cardCodes) {

    const counts = {}
    const order =  {2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 8, 0: 9, J: 10, Q: 11, K: 12, A: 13}

    for(let i = 0; i < cardCodes.length; i++) {
        let currValue = cardCodes[i][0]
        if(counts.hasOwnProperty(currValue)) {
            counts[currValue]++
        } else {
            counts[currValue] = 1
        }
    }

    //keys are the unique cards
    const uniqueCards = Object.keys(counts)

    //sort the unique cards
    uniqueCards.sort((a, b) => order[a] - order[b])


    //check if it is straight flush
    if(uniqueCards.length === 5) {
        let isStraightFlush = true
        for(let i = 1; i < uniqueCards.length; i++) {
            //check if they are in order
            if(order[uniqueCards[i]] - order[uniqueCards[0]] !== i) {
                isStraightFlush = false
                break
            }
            //also check if they are at the same suit
            if(cardCodes[i][1] !== cardCodes[0][1]) {
                isStraightFlush = false
                break
            }
        }

        if(isStraightFlush) return 'Straight Flush'
    }

    //Four of a kind and full house
    if(uniqueCards.length === 2) {
        if(counts[uniqueCards[0]] === 4 || counts[uniqueCards[1]] === 4) {
            return 'Four of a kind'
        } else if (counts[uniqueCards[0]] === 3 || counts[uniqueCards[1]] === 3) {
            return 'Full house'
        }
    }

    //Flush
    if(uniqueCards.length === 5) {
        let isFlush = true
        for(let i = 1; i < cardCodes.length; i++) {
            if(cardCodes[i][1] !== cardCodes[0][1]) {
                isFlush = false
                break
            }
        }
        if(isFlush) return 'Flush'
    }

    return 'unknnown yet'
    /* if counts size = 5 then it could be straight flush
            check if they are in order

    */


}

//export topHand function for testing
module.exports = topHand
