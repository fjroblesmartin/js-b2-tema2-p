import { Validator } from '../u1/u1e1.js';
import { EmailValidator } from '../u1/u1e2.js';
import { NumberValidator }  from '../u1/u1e3.js';
import { FormValidator }  from '../u2/u2e1.js';

describe('FormValidator', () => {

    const fv = new FormValidator();

    test('Check initialization', () => {
        expect(fv.nFields()).toBe(0);
        expect(fv.validate()).toMatch(/ERROR_EMPTY/);
    });

    test('Adding fields...', () => {
        expect(fv.addField(new Validator())).toMatch(/ERROR_TYPE/);

        fv.addField(new EmailValidator('correo', 'test@gmail.com'));
        expect(fv.nFields()).toBe(1);

        fv.addField(new EmailValidator(null, ''));
        expect(fv.nFields()).toBe(2);
        expect(fv.addField(new EmailValidator(null, 'test@test.com'))).toMatch(/ERROR_DUPLICATE/);
        expect(fv.nFields()).toBe(2);

        fv.addField(new NumberValidator('edad', 20));
        expect(fv.nFields()).toBe(3);
    });

    test('Removing fields...', () => {
        fv.removeField('none');
        expect(fv.nFields()).toBe(2);

        fv.removeField('not');
        expect(fv.nFields()).toBe(2);
    });

    test('Full form validation...', () => {
        const f = new NumberValidator('hermanos', '', 0, 5);
        f.required = true;
        fv.addField(f);
        expect(fv.nFields()).toBe(3);
        expect(fv.validate()).toMatch(/ERROR_REQUIRED/);

        fv.removeField('hermanos');
        expect(fv.nFields()).toBe(2);
        expect(fv.validate()).toBe(true);
    });
});
