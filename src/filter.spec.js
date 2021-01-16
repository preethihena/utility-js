const filter = require('./filter');

const filterUpperCase = (element) => {
    if(element == element.toUpperCase())
        return true;
    return false;
}

describe('Filter', () => {

    it('Filter of function x => false over [1,2,3] is ', () => {
        expect(filter([1,2,3],x => false)).toEqual([]);
    });

    it('Filter of function x => true over [] is ', () => {
        expect(filter([],x => true)).toEqual([]);
    });

    it('Filter of function x => x > 1 over {1,2,3} is ', () => {
            expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
        });

    it('Filter of function filterUpperCase over  [a,B,c,D] is', () => {
            expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D']);
        });

})
