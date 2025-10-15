import { IPrintable, Message } from '../u4/u4e1.js';

describe('Interfaces', () => {

    const ITestable = {
        test: function() {}
    };

    test('Implements', () => {
        const m = new Message();
        expect(m.implements(IPrintable)).toBe(true);
        expect(m.implements(ITestable)).toBe(false);
    });

    test('Message Class', () => {
        try {
            const m = new Message('Hola');
            expect(m.text).toBe('Hola');
            m.print();
        } catch(e) {
            expect(e.message).toMatch(/ERROR_IMPLEMENTS/);
        }
    });

});
