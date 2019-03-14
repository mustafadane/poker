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


//Everything that app does wrapped in this function to be able to use await.
async function initializeApp () {
    console.log('Cards are being shuffled...')
    const deckId = await shuffleCard()

    deckId && console.log('Cards are shuffled.')

    console.log('5 cards are being drawn...')

    const cards = await draw(deckId)

    if (cards) {
        console.log("Here is the cards drawn:")
        console.log('Value | Suit')
        cards.forEach(card => {
            console.log(card.value, card.suit)
        })

    }
}

//Then, app is started by calling this function.
initializeApp()
