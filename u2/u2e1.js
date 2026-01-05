// T2. Trabajo experto con clases
// U2. Polimorfismo
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

// -----------------------------------------------------------------------------
// A. Importación de clases 
// -----------------------------------------------------------------------------

 const EmailValidator = require('./u1e2.js');
 const NumberValidator = require('./u1e3.js');



// B. Clase FormValidator
class FormValidator {
    
    // C. Propiedad privada #fieldList
    #fieldList;

    constructor() {
        this.#fieldList = [];
    }

    // D. Método addField
    addField(validator) {
        // 1. Validación de Tipo
        // Comprobamos si es instancia de alguna de las clases permitidas
        if (!(validator instanceof EmailValidator) && !(validator instanceof NumberValidator)) {
            return "ERROR_TYPE. The object's type to be added is not supported.";
        }

        // 2. Validación de Duplicados
        // Buscamos si ya existe algún validador con la misma propiedad 'field'
        const duplicate = this.#fieldList.some(item => item.field === validator.field);
        
        if (duplicate) {
            return `ERROR_DUPLICATE. Ya existe un campo con el nombre ${validator.field}`;
        }

        // 3. Inserción correcta
        this.#fieldList.push(validator);
        return true;
    }

    // E. Método removeField
    removeField(fieldName) {
        // Filtramos la lista manteniendo solo los que NO coincidan con el nombre
        this.#fieldList = this.#fieldList.filter(item => item.field !== fieldName);
    }

    // F. Método nFields
    nFields() {
        return this.#fieldList.length;
    }

    // G. Método validate
    validate() {
        // 1. Verificar si está vacío
        if (this.#fieldList.length === 0) {
            return "ERROR_EMPTY. El formulario no dispone de campos a validar";
        }

        // 2. Iterar sobre los validadores (Polimorfismo)
        for (const validator of this.#fieldList) {
            // Llamamos a isValid. Asumimos que devuelve true si es correcto,
            // o un string/error si falla.
            const result = validator.isValid();

            // 3. Si no es válido (el resultado no es true estrictamente), devolvemos el error
            if (result !== true) {
                return result; 
            }
        }

        // 4. Si termina el bucle sin errores
        return true;
    }
}

// H. Exportación de clase
 
export default FormValidator;
