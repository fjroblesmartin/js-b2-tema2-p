// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:


export class Validator {
  // A. Propiedades privadas (se definen con el prefijo #)
  #field;
  #value;
  #required;

  // B. Constructor
  constructor(fieldName = "", value = "") {
    this.#field = fieldName;
    this.#value = value;
    this.#required = false; // Valor por defecto según el enunciado
  }

  // C. Getters y setters para 'field'
  get field() {
    return this.#field;
  }

  set field(newName) {
    this.#field = newName;
  }

  // D. Getters y setters para 'value'
  get value() {
    return this.#value;
  }

  set value(newValue) {
    this.#value = newValue;
  }

  // E. Getters y setters para 'required'
  get required() {
    return this.#required;
  }

  set required(status) {
    this.#required = status;
  }

  // F. Método isEmpty
  // Comprueba si el valor es una cadena vacía o nula
  isEmpty() {
    return this.#value === "" || this.#value === null || this.#value === undefined;
  }

  // G. Método isValid
  // Devuelve true si:
  // 1. El campo no está vacío.
  // 2. O si el campo está vacío pero NO es obligatorio.
  isValid() {
    if (!this.isEmpty()) {
      return true;
    }
    // Si llegamos aquí es que está vacío, 
    // por lo que solo es válido si no es requerido.
    return !this.#required;
  }
}