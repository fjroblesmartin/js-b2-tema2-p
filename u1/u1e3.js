// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

// A. Importar Validator
import { Validator } from './u1e1.js';

// B. Clase NumericValidator
export class NumericValidator extends Validator {
  // Propiedades privadas específicas de esta clase
  #min;
  #max;

  // C. Constructor clase NumericValidator
  constructor(fieldName = "none", value = "", min = null, max = null) {
    // Llamada al constructor padre
    super(fieldName, value);
    this.#min = min;
    this.#max = max;
  }

  // D. Método checkNumber
  checkNumber() {
    const val = this.value;

    // Validar si es estrictamente de tipo número y no es NaN
    if (typeof val !== 'number' || Number.isNaN(val)) {
      return `ERROR_NUMBER. ${this.field} NO es de tipo número o un número válido ${val}.`;
    }

    // Validar máximo (si está definido)
    if (this.#max !== null && val > this.#max) {
      return `ERROR_MAX. ${this.field} supera el valor máximo asignado.`;
    }

    // Validar mínimo (si está definido)
    if (this.#min !== null && val < this.#min) {
      return `ERROR_MIN. ${this.field} no alcanza el valor máximo asignado.`;
    }

    return true;
  }

  // E. Sobreescritura de isValid
  isValid() {
    // 1. Si el campo es requerido y está vacío
    if (this.required && this.isEmpty()) {
      return `ERROR_REQUIRED. ${this.field} no puede ser vacío si es obligatorio.`;
    }

    // 2. Si el campo NO está vacío, validamos las reglas numéricas
    if (!this.isEmpty()) {
      const numberResult = this.checkNumber();
      if (numberResult !== true) {
        return numberResult; // Devuelve el string de error de checkNumber
      }
    }

    // 3. Si todo es correcto
    return true;
  }
}