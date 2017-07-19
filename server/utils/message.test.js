var expect = require('expect');
var {generateMessage, generateLocationMessage} = require ('./message');

describe('generateMessage', () => {
    it('should genearte the correct message object', () => {
        var from = 'Test';
        var text = 'Text message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
        
    })
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'test';
        var latitude = 6;
        var longitude = 20;
        var url = 'https://www.google.com/maps?q=6,20';

        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url
        });
    });
})