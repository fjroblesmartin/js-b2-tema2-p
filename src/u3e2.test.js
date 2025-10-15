import { Rectangle } from '../u3/u3e2.js';

describe('Rectangle Class', () => {

    const r = new Rectangle();

    test('Abstract Class overrides', () => {
        expect(r instanceof Rectangle).toBe(true);
        expect(r.getArea()).toBe(0);
    });

    test('Rectangle functionality', () => {
        expect(r.isSquare()).toBe(true);

        r.base = 2;
        r.height = 10;
        expect(r.getArea()).toBe(20);
        expect(r.isSquare()).toBe(false);
    });

});
