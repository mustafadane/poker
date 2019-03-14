const axios = require("axios");

console.log('Welcome to my Poker App || Mustafa Dane')


async function shuffleCard () {
    try {
        //axios returs the whole response and the response is grabbed.
        const { data } = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")

        //if shuffling is success, data object will have success property as true. Function returns deck_id.
        if(data.success) {
            return data.deck_id
        } else {
            throw Error('shuffling was not successful!')
        }
    } catch (err) {
        console.log("Some error happened during shuffling:", err)
    }
}

async function draw (deckId) {
    try {
        const { data } = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)

        //if success, then return the drawn cards.
        if(data.success) {
            return data.cards
        } else {
            throw Error('drawing was not successfull!')
        }
    } catch (err) {
        console.log("Some error happened during drawing:", err.message)
    }

}

function topHand (cardCodes) {
    console.log('cardCodes', cardCodes)
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
    console.log('counts', counts)
    const uniqueCards = Object.keys(counts)
    //sort the unique cards
    console.log('UNQ', uniqueCards)
    uniqueCards.sort((a, b) => order[a] - order[b])
    console.log('UNQ', uniqueCards)
    //check if it is straight flush
    if(uniqueCards.length === 5) {
        let isStraightFlush = true
        for(let i = 1; i < uniqueCards.length; i++) {
            if(order[uniqueCards[i]] - order[uniqueCards[0]] !== i) {
                isStraightFlush = false
                break
            }
        }

        if(isStraightFlush) return 'Straight Flush'
    }

    return 'unknnown yet'
    /* if counts size = 5 then it could be straight flush
            check if they are in order

    */


}


//Everything that app does wrapped in this function to be able to use await.
async function initializeApp () {
    console.log('Cards are being shuffled...\n')
    const deckId = await shuffleCard()

    deckId && console.log('Cards are shuffled.\n')

    console.log('5 cards are being drawn...\n')

    const cards = await draw(deckId)

    if (cards) {
        console.log("Here is the cards drawn:\n")
        console.log('Value | Suit')
        cards.forEach(card => {
            console.log(card.value, card.suit)
        })

        topHand(cards.map(card => card.code))
    }



}

//Then, app is started by calling this function.
initializeApp()

//export topHand function for testing
module.exports = topHand
