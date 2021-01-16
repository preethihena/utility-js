const min = require('./min');

describe('Min', () => {

    it('Minimum of [] is', () => {
        expect(min([])).toEqual(undefined);
    });

    it('Minimum of [1,2,3,4] is ', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });
    it('Minimum of [-1,-2,-3,-4] is ', () => {
            expect(min([-1,-2,-3,-4])).toEqual(-4);
    });

})
