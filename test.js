const expect = require('chai').expect;
const topHand = require('./')

describe('topHand function', () => {

    it('returns straight flush with J,10,9,8,7', () => {
        const cards1 = ['JS', '0S', '9S', '8S', '7S']
        expect(topHand(cards1)).to.equal('Straight Flush')

        const cards2 = ['6D', '5S', '4C', '3S', '2S']
        expect(topHand(cards2)).to.equal('Straight Flush')

        const cards3 = ['AS', 'KS', 'QS', 'JS', '0S']
        expect(topHand(cards3)).to.equal('Straight Flush')

    })
})
