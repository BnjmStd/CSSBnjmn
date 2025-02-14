const fs = require('fs').promises;
const path = require('path');

class Paciente {
    constructor(
        age, sex, cp, trtbps, chol, fbs, restecg, thalachh,
        exng, oldpeak, slp, caa, thall, output
    ) {
        this.age = age;
        this.sex = sex;
        this.cp = cp;
        this.trtbps = trtbps;
        this.chol = chol;
        this.fbs = fbs;
        this.restecg = restecg;
        this.thalachh = thalachh;
        this.exng = exng;
        this.oldpeak = oldpeak;
        this.slp = slp;
        this.caa = caa;
        this.thall = thall;
        this.output = output;
    }

    mostrarInfo() {
        console.log(`Paciente Edad: ${this.age}, Sexo: ${this.sex === 1 ? 'Masculino' : 'Femenino'}, 
        Presión Arterial: ${this.trtbps}, Colesterol: ${this.chol}, Resultado: ${this.output === 1 ? 'Ataque cardiaco' : 'No ataque cardiaco'}`);
    }
}

const deletePaciente = (allPacientes, index) => {
    if (index < 0 || index >= allPacientes.length) {
        console.error('indice inválido. No se encontró el paciente.');
        return;
    }

    allPacientes.splice(index, 1);
    console.log('Paciente eliminado exitosamente.');
}

const editPaciente = (allPacientes, index, newData) => {
    if (index < 0 || index >= allPacientes.length) {
        console.error('Índice inválido. No se encontró el paciente.');
        return;
    }

    Object.assign(allPacientes[index], newData);
    console.log('Paciente editado exitosamente.');
}

const addPaciente = (allPacientes, newPaciente) => {
    allPacientes.push(newPaciente);
    console.log('Paciente añadido exitosamente.');
}

const getDataCsv = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });

        // en js los array parten de 0 por eso tengo 303
        const rows = data // data deberia tener todo el csv en un string
            .trim() // entonces elimino los espacios en blanco al inicio y al final del string
            .split('\n') // separo el string data en varios string, en arrays, cada linea se convierte en un elemento del array
            .map(row => row.split(',')) // a cada linea que es un string, la dividimos en un array de valores usando el split(',') la función map mapea todo el array de lineas y cada linea la separo con split en palabras separadas por coma

        return rows;

    } catch (err) {

        console.error('Error al leer el archivo:', err);
        return null;

    }
}

const generatePacientes = (infoCsv) => {
    const pacientes = infoCsv
        .slice(1) // OMITE la primera linea osea el encabezado
        .map(row => { // el .map recorre cada fila del arreglo con solo datos en teoria y genera pacientes 
            const [
                age, sex, cp, trtbps, chol, fbs, restecg, thalachh,
                exng, oldpeak, slp, caa, thall, output
            ] = row.map(value => parseFloat(value));

            return new Paciente(
                age, sex, cp, trtbps, chol, fbs, restecg, thalachh,
                exng, oldpeak, slp, caa, thall, output
            ) // crea una nueva instancia de pacientes  devolviendo un NUEVO array donde cada elemento es un objeto Paciente
        }) 

    pacientes.forEach(paciente => paciente.mostrarInfo())
    // recorre cada paciente y va al metodo mostrarInfo

    return pacientes
}

// es una función para parecerme un poco a los lenguajes de c que tienen main
async function main() {
    const filePath = path.join(__dirname, './datos_pacientes.csv');
    const infoCsv = await getDataCsv(filePath); // Espera a que se lean los datos

    if (!infoCsv) {
        console.error('Error: el archivo no se pudo cargar.');
        return;
    }

    const allPacientes = generatePacientes(infoCsv);
    
    
    const nuevoPaciente = new Paciente(50, 1, 2, 130, 200, 1, 0, 150, 0, 1.5, 2, 0, 3, 1);
    
    addPaciente(allPacientes, nuevoPaciente);
    editPaciente(allPacientes, 0, { age: 55, chol: 180 });
    deletePaciente(allPacientes, 0);

    console.log(`Número de pacientes procesados: ${allPacientes.length}`);
}

main()