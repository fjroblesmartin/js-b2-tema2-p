import { EmailValidator }  from '../u1/u1e2.js';

describe('EmailValidator', () => {

    const ev = new EmailValidator(null, 'test.com');

    test('Public field access...', () => {
        expect(ev.field).toBe('none');
        ev.field = 'email';
        expect(ev.field).toBe('email');
    });

    test('Invalid emails...', () => {
        ev.value = 'test.test.com';
        expect(ev.checkEmailAddress()).toMatch(/ERROR_EMAIL/);
        ev.value = 't@t.com';
        expect(ev.checkEmailAddress()).toMatch(/ERROR_EMAIL/);
        ev.value = '@test.com';
        expect(ev.checkEmailAddress()).toMatch(/ERROR_EMAIL/);
        ev.value = 'test@test';
        expect(ev.checkEmailAddress()).toMatch(/ERROR_EMAIL/);
        ev.value = 'test@test.c';
        expect(ev.checkEmailAddress()).toMatch(/ERROR_EMAIL/);
    });

    test('Valid emails...', () => {
        ev.value = 'te@te.com';
        expect(ev.checkEmailAddress()).toBe(true);
        ev.value = 'test.test@test.com';
        expect(ev.checkEmailAddress()).toBe(true);
    });

    test('Not required and empty...', () => {
        ev.value = '';
        expect(ev.isValid()).toBe(true);
    });

    test('Full email validation...', () => {
        ev.required = true;
        ev.value = '';
        expect(ev.isValid()).toMatch(/ERROR_REQUIRED/);
        ev.value = 'test@test.c';
        expect(ev.isValid()).toMatch(/ERROR_EMAIL/);
        ev.value = 'test.test@test.com';
        expect(ev.isValid()).toBe(true);
    });


});
