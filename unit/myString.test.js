const {MyString} = require('./myString');


describe('myString', () => {
    const str = new MyString('hell');

    beforeEach(() => {
        strTest = 'two steps from '
    });


    test('must support string methods, for example String.concat(...)', () => {
        expect(strTest.concat(str)).toEqual('two steps from hell');
    });

    test('Has checks whether the passed substring is contained in the current string. Returns true or false', () => {
        expect(str.has('e')).toBeTruthy();
        expect(str.has('r')).toBeFalsy();
    });

    test('Remove deletes the first occurrence of the passed character and returns the index of the deleted character or null', () => {
        expect(str.remove('e')).toBe(1);
        expect(str.remove('r')).toBeNull();
    });
});

describe('Has', () => {
    
});