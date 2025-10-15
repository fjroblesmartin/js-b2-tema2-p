import { Validator } from '../u1/u1e1.js';

describe('Validator', () => {

    const v = new Validator();

    test('Private value access...', () => {
        expect(v.value).toBe('');
    });

    test('Getter default required value...', () => {
        expect(v.required).toBe(false);
    });

    test('isValid empty value not required...', () => {
        expect(v.isValid()).toBe(true);
    });

    test('Setter required...', () => {
        v.required = true;
        expect(v.required).toBe(true);
    });

    test('isValid empty value required...', () => {
        expect(v.isValid()).toBe(false);
    });

    test('isValid non empty value required...', () => {
        v.value = 'test';
        expect(v.isValid()).toBe(true);
    });

});
