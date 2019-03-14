const expect = require('chai').expect;
const topHand = require('./topHand')

describe('topHand function', () => {

    it("returns 'Straight Flush' when 5 cards are in sequential order and in the same suit", () => {
        const cards1 = ['JS', '0S', '9S', '8S', '7S']
        expect(topHand(cards1)).to.equal('Straight Flush')

        const cards2 = ['6D', '5S', '4S', '3S', '2S']
        expect(topHand(cards2)).to.not.equal('Straight Flush')

        const cards3 = ['AS', 'KS', 'QS', 'JS', '9S']
        expect(topHand(cards3)).to.not.equal('Straight Flush')

    })

    it("returns 'Four of a kind' when there are 4 card of the same kind", () => {
        const cards1 = ['4S', '4C', '4D', '4H', 'AS']
        expect(topHand(cards1)).to.equal('Four of a kind')

        const cards2 = ['4S', '4C', '4D', 'AH', 'AS']
        expect(topHand(cards2)).to.not.equal('Four of a kind')
    })

    it("returns 'Full house' when there are 3 card of the same kind and 2 of another kind", () => {
        const cards1 = ['4S', '4C', '4D', '4H', 'AS']
        expect(topHand(cards1)).to.not.equal('Full house')

        const cards2 = ['4S', '4C', '4D', 'AH', 'AS']
        expect(topHand(cards2)).to.equal('Full house')
    })

    it("returns 'Flush' when 5 cards are in the same suit", () => {
        const cards1 = ['JS', '0S', '2S', '8S', '7S']
        expect(topHand(cards1)).to.equal('Flush')

        const cards2 = ['6D', '5S', '4S', '3S', '2S']
        expect(topHand(cards2)).to.not.equal('Flush')
    })

    it("returns 'Straight' when 5 cards are in order", () => {
        const cards1 = ['JD', '0S', '9S', '8S', '7C']
        expect(topHand(cards1)).to.equal('Straight')

        const cards2 = ['6S', '5S', '4S', '3S', '2S']
        expect(topHand(cards2)).to.not.equal('Straight')
    })

    it("return 'Three of a kind' when there are 3 cards of the same kind and other two are different kinds.", () => {
        const cards1 = ['QC', 'QD', 'QH', '3S', '2S']
        expect(topHand(cards1)).to.equal('Three of a kind')

        //this should be full house
        const cards2 = ['QC', 'QD', 'QH', '3S', '3D']
        expect(topHand(cards2)).to.not.equal('Three of a kind')
    })

    it("return 'Two pair' when there are 2 pairs", () => {
        const cards1 = ['QC', 'QD', '3H', '3S', '2S']
        expect(topHand(cards1)).to.equal('Two pair')

        //this should be Three of a kind
        const cards2 = ['QC', 'QD', 'QH', '3S', '2S']
        expect(topHand(cards2)).to.not.equal('Two pair')
    })


    it("return 'One pair' when there are 2 pairs", () => {
        const cards1 = ['QC', 'QD', '0H', '3S', '2S']
        expect(topHand(cards1)).to.equal('One pair')

        //this should be Three of a kind
        const cards2 = ['QC', 'QD', 'QH', '3S', '2S']
        expect(topHand(cards2)).to.not.equal('One pair')
    })

    it("If there are 5 different kinds and no other pattern, returns 'High card'", () => {
        const cards1 = ['2S', '4S', '5C', '0D', 'KH']
        expect(topHand(cards1)).to.equal('High card')

        const cards2= ['2S', '2C', '5C', '0D', 'KH']
        expect(topHand(cards2)).to.not.equal('High card')
    })
})
