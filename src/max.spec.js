const max = require('./max');

describe('Max', () => {

    it('Maximum of [] is', () => {
        expect(max([])).toEqual(undefined);
    });

    it('Maximum of [1,2,3,4] is ', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });
    it('Maximum of [-1,-2,-3,-4] is ', () => {
            expect(max([-1,-2,-3,-4])).toEqual(-1);
    });

})
