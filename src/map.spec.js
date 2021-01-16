const map = require('./map');

const identity = (number) => {
    return number;
}
const cube = (number) => {
    return Math.pow(number,3);
}


describe('Map', () => {

    it('Map of function someObject => someObject.x + 1 over [a{x : 10}] is ', () => {
        expect(map([{x :10}], someObject => someObject.x+1)).toEqual([11]);
    });

    it('Map of function cube over {} is ', () => {
        expect(map([],cube)).toEqual([]);
    });

    it('Map of function cube over  {5,2,3,4} is ', () => {
            expect(map([5,2,3,4],cube)).toEqual([125,8,27,64]);
        });

    it('Map of function identity over {5,2,3,4} is ', () => {
            expect(map([5,2,3,4],identity)).toEqual([5,2,3,4]);
        });

})
