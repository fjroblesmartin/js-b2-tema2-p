// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

/**
 * Clase Validator
 * Clase base para gestionar validaciones de campos.
 * Student: [Tu Nombre / Gemini]
 */
export class Validator {
    // A. Propiedades privadas (Private fields)
    // En JS moderno usamos '#' para privacidad real.
    #field;
    #value;
    #required;

    // B. Constructor
    // Asignamos valores por defecto a los parámetros por si no llegan.
    constructor(fieldName = "", value = "") {
        this.#field = fieldName;
        this.#value = value;
        this.#required = false; // Por defecto no es obligatorio
    }

    // C. Getters y Setters para field
    get field() {
        return this.#field;
    }

    set field(newField) {
        this.#field = newField;
    }

    // D. Getters y Setters para value
    get value() {
        return this.#value;
    }

    set value(newValue) {
        this.#value = newValue;
    }

    // E. Getters y Setters para required
    get required() {
        return this.#required;
    }

    set required(isRequired) {
        this.#required = isRequired;
    }

    // F. Método isEmpty
    // Verifica si el valor es "falsy" en contexto de formulario (vacío, null o undefined)
    isEmpty() {
        return this.#value === "" || this.#value === null || this.#value === undefined;
    }

    // G. Método isValid
    isValid() {
        // 1. Si no está vacío, es válido (tenga lo que tenga)
        if (!this.isEmpty()) {
            return true;
        }

        // 2. Si llegamos aquí es que ESTÁ vacío.
        // Entonces solo es válido si NO es requerido.
        return !this.#required;
    }
}

