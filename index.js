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
        console.log(data)
    } catch (err) {
        console.log("Some error happened during drawing:", err.message)
    }

}


//Everything that app does wrapped in this function to be able to use await.
async function initializeApp () {
    const deckId = await shuffleCard()
    console.log(deckId)
    await draw(deckId)
}

//Then, app is started by calling this function.
initializeApp()
