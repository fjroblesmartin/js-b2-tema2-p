// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

// A. Importar Validator
import { Validator } from './u1e1.js';

// B. Clase EmailValidator
export class EmailValidator extends Validator {

  // C. Constructor
  constructor(fieldName = "none", value = "") {
    // Llamada al constructor de la clase padre (Validator)
    super(fieldName, value);
  }

  // D. Método checkEmailAddress
  checkEmailAddress() {
    const email = this.value; // Usamos el getter heredado

    // Lógica de validación según requisitos:
    // 1. Un único símbolo "@"
    const parts = email.split('@');
    if (parts.length !== 2) return this.#getErrorString();

    const localPart = parts[0];
    const domainPart = parts[1];

    // 2. Al menos 1 caracter antes del "@"
    if (localPart.length < 1) return this.#getErrorString();

    // 3. Dominio válido (contiene punto, nombre > 1, extensión > 1)
    if (!domainPart.includes('.')) return this.#getErrorString();

    const domainParts = domainPart.split('.');
    const extension = domainParts.pop();
    const domainName = domainParts.join('.');

    if (domainName.length < 2 || extension.length < 2) {
      return this.#getErrorString();
    }

    return true;
  }

  // Método auxiliar privado para el mensaje de error de email
  #getErrorString() {
    return `ERROR_EMAIL. ${this.field} NO es una dirección de correo válida.`;
  }

  // E. Sobreescritura de método isValid
  isValid() {
    // 1. Si es requerido y está vacío
    if (this.required && this.isEmpty()) {
      return `ERROR_REQUIRED. ${this.field} no puede ser vacío si es obligatorio.`;
    }

    // 2. Si no es vacío, comprobamos el formato del email
    if (!this.isEmpty()) {
      const emailCheck = this.checkEmailAddress();
      if (emailCheck !== true) {
        return emailCheck; // Devuelve el string de error de checkEmailAddress
      }
    }

    // 3. Si pasa las validaciones o es opcional y está vacío
    return true;
  }
}