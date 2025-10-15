import { Shape } from '../u3/u3e1.js';

describe('Abstract Classes', () => {

    test('Instantiation', () => {
        try {
            const s = new Shape();
        } catch(e) {
            expect(e.message).toMatch(/ERROR_ABSTRACT/);
        }
    });

});
