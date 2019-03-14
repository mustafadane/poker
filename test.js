const expect = require('chai').expect;
const topHand = require('./topHand')

describe('topHand function', () => {

    it("returns 'Straight Flush' when 5 cards are in sequential order", () => {
        const cards1 = ['JS', '0S', '9S', '8S', '7S']
        expect(topHand(cards1)).to.equal('Straight Flush')

        const cards2 = ['6D', '5S', '4C', '3S', '2S']
        expect(topHand(cards2)).to.equal('Straight Flush')

        const cards3 = ['AS', 'KS', 'QS', 'JS', '9S']
        expect(topHand(cards3)).to.not.equal('Straight Flush')

    })

    it("returns 'Four of a kind' when there are 4 card of the same kind", () => {
        const cards1 = ['4S', '4C', '4D', '4H', 'AS']
        expect(topHand(cards1)).to.equal('Four of a kind')

        const cards2 = ['4S', '4C', '4D', 'AH', 'AS']
        expect(topHand(cards2)).to.not.equal('Four of a kind')
    })
})
