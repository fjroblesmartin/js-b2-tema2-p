// T2. Trabajo experto con clases
// U3. Clases abstractas
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:



class Shape {
    // C. Constructor
    constructor() {
        // Validación de clase abstracta (no se puede instanciar directamente)
        if (new.target === Shape) {
            throw new Error('ERROR_ABSTRACT. Abstract class Shape cannot be directly instantiated.');
        }

        // B. Propiedad nSides
        // Inicializamos la propiedad, aunque su valor dependerá de la clase hija
        this.nSides = undefined;
    }

    // D. Método abstracto getArea
    getArea() {
        throw new Error('ERROR_ABSTRACT_METHOD. Method "getArea()" should be implemented by child classes of "Shape".');
    }
}

// E. Exportación de clase
 export default Shape;