const tail = require('./tail');

describe('Tail', () => {

    it('Tail of empty list {} is', () => {
        expect(tail([])).toEqual([]);
    });

    it('Tail of non empty list {5,2,3,4} is first element', () => {
        expect(tail([5,2,3,4])).toEqual([2,3,4]);
    });

})
