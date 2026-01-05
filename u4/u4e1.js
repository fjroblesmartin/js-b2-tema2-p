// T2. Trabajo experto con clases
// U4. Interfaces
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

// -----------------------------------------------------------------------------
// A. Objeto IPrintable (Interfaz simulada)
// -----------------------------------------------------------------------------
const IPrintable = {
    print: function() {} // Definición vacía del método requerido
};

// -----------------------------------------------------------------------------
// B. Método global 'implements' en Object.prototype
// -----------------------------------------------------------------------------
// Usamos defineProperty para asegurar que 'enumerable' sea false.
Object.defineProperty(Object.prototype, 'implements', {
    value: function(interf) {
        // Recorremos las propiedades del objeto interfaz (interf)
        for (let key in interf) {
            // Solo nos interesan las funciones (métodos) de la interfaz
            if (typeof interf[key] === 'function') {
                // Verificamos si la instancia actual (this) tiene ese método
                // y si efectivamente es una función.
                if (!this[key] || typeof this[key] !== 'function') {
                    return false;
                }
            }
        }
        // Si pasa todas las comprobaciones, devuelve true
        return true;
    },
    enumerable: false,   // REQUISITO: No iterable / no enumerable
    writable: true,
    configurable: true
});

// -----------------------------------------------------------------------------
// C, D, y E. Clase Message
// -----------------------------------------------------------------------------
class Message {
    constructor(text) {
        this.text = text;

        // D. Validación en el constructor
        // Comprobamos si la instancia actual cumple con la interfaz IPrintable
        if (!this.implements(IPrintable)) {
            throw new Error('ERROR_IMPLEMENTS. This class doesn\'t implements the interface IPrintable.');
        }
    }

    // E. Implementación del método print
    print() {
        console.log(this.text);
    }
}

// -----------------------------------------------------------------------------
// F. Exportación
// -----------------------------------------------------------------------------

export { IPrintable, Message };
