var expect = require('expect');
var {generateMessage} = require ('./message');

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