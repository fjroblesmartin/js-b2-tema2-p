import { NumberValidator }  from '../u1/u1e3.js';

describe('NumberValidator', () => {

    const nv = new NumberValidator(null, '2');

    test('Public field access...', () => {
        expect(nv.field).toBe('none');
        nv.field = 'total';
        expect(nv.field).toBe('total');
    });

    test('Invalid number...', () => {
        expect(nv.checkNumber()).toMatch(/ERROR_NUMBER/);

        nv.value = -2;
        nv.min = 0;
        nv.max = 100;
        expect(nv.min).toBe(0);
        expect(nv.max).toBe(100);
        expect(nv.checkNumber()).toMatch(/ERROR_MIN/);

        nv.value = 200;
        expect(nv.checkNumber()).toMatch(/ERROR_MAX/);
    });

    test('Number re-asign...', () => {
        nv.value = 50;
        expect(nv.checkNumber()).toBe(true);
    });

    test('Not required and empty...', () => {
        nv.value = '';
        expect(nv.isValid()).toBe(true);
    });

    test('Full number validation...', () => {
        nv.required = true;

        nv.value = '';
        expect(nv.isValid()).toMatch(/ERROR_REQUIRED/);

        nv.value = -1;
        expect(nv.isValid()).toMatch(/ERROR_MIN/);

        nv.value = 101;
        expect(nv.isValid()).toMatch(/ERROR_MAX/);

        nv.value = 50;
        expect(nv.isValid()).toBe(true);
    });
});
