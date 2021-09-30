const {myString} = require('./myString');

const str = new myString(['h', 'e', 'l', 'l']);

describe('myString', () => {
    
    beforeEach(() => {
        strTest = 'two steps from '
    });

    test.todo('Constructor must return string');
    test.todo('must support string methods, for example String.concat(...) ');
    test.todo('Has checks whether the passed substring is contained in the current string. Returns true or false ');
    test.todo('Remove deletes the first occurrence of the passed character and returns the index of the deleted character or null ');

    test('Constructor must return string', () => {
        expect(str === String.prototype).toBeTruthy();
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