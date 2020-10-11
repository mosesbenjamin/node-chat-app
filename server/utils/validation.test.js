const expect = require('expect');
const {isRealString} = require('./validation')

describe('isRealString', ()=>{
    it('should reject non string values', ()=>{
        var str = {name: 'Mavewrick', age: 21}
        var res = isRealString(str);

        expect(res).toBe(false);
    });

    it('should reject string with only spaces', ()=>{
        var str = '    '
        var res = isRealString(str);

        expect(res).toBe(false);
    });

    it('should allow strings with non space characters', ()=>{
        var str = '  Test string  ';
        var res = isRealString(str);

        expect(res).toBe(true);
    });
});