const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate the correct message object', ()=>{
        var from  = 'Admin'
        var text = 'Something here'
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', ()=>{
    it('should generate correct location object', ()=>{
        var from = 'Admin';
        var latitude = 1;
        var longitude = 2;
        var url = `https://google.com/maps?q=${latitude},${longitude}`;
        var createdAt = new Date().getTime();
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({
            from,
            url,
            createdAt
        });
    });
})