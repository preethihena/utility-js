const head = require('./head');

describe('Head', () => {

    it('Head of empty list {} is', () => {
        expect(head([])).toEqual(null);
    });

    it('Head of non empty list {5,2,3,4} is first element', () => {
        expect(head([5,2,3,4])).toEqual(5);
    });

})
