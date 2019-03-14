const axios = require("axios");

console.log('Welcome to my Poker App || Mustafa Dane')

let deckId;

async function shuffleCard () {
    try {
        //axios returs the whole response and the response is grabbed.
        const { data } = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        console.log(data)

        //if shuffling is success, data object will have success property as true.
        if(data.success) {
            deckId = data.deck_id
        } else {
            throw Error('shuffling was not successful!')
        }
    } catch (err) {
        console.log("Some error happened:", err)
    }
}

//Everything that app does wrapped in this function to be able to use await.
async function initializeApp () {
    await shuffleCard()
    console.log(deckId)
}

//Then, app is started by calling this function.
initializeApp()
