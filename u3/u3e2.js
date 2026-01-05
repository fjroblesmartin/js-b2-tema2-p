// T2. Trabajo experto con clases
// U3. Clases abstractas
// Enunciado disponible en u3e2.md / Enunciat disponible a u3e2.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

// A. Importación Shape
import { Shape } from './u3e1.js';

// B. Clase Rectangle que extiende Shape
class Rectangle extends Shape {
    
    // C. Propiedades privadas
    #base;
    #height;

    // D. Constructor
    constructor(base = 0, height = 0) {
        super(); // Llamada obligatoria al constructor padre
        
        // Requisito específico: asignar valor 2 a nSides
        this.nSides = 2; 
        
        // Asignación de propiedades privadas
        this.#base = base;
        this.#height = height;
    }

    // Getters y Setters para base
    get base() {
        return this.#base;
    }

    set base(value) {
        this.#base = value;
    }

    // Getters y Setters para height
    get height() {
        return this.#height;
    }

    set height(value) {
        this.#height = value;
    }

    // E. Sobreescritura de getArea
    getArea() {
        return this.#base * this.#height;
    }

    // F. Método isSquare
    isSquare() {
        // Es un cuadrado si la base es igual a la altura
        // (Y asumimos que deben ser > 0 para ser una figura válida)
        return this.#base === this.#height && this.#base > 0;
    }
}

// G. Exportación de clase
export { Rectangle };
