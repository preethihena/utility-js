const reduce = require('./reduce');

const reduceUpperCase = (element) => {
    if(element == element.toUpperCase())
        return true;
    return false;
}

describe('reduce', () => {

    it('Reduce of function (x,y)=>x+y over [] is ', () => {
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
    });

    it('Reduce of function (x,y)=>x+y  over [] with initial value 10 is ', () => {
        expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
    });

    it('Reduce of function (x,y)=>x+y over {a,b,c} is ', () => {
            expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual("abc");
        });

    it('Reduce of function (x,y)=>x+y over [a,b,c] with initial value as z is', () => {
            expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual("zabc");
        });

})
