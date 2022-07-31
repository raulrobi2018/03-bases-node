const fs = require("fs");

const colors = require("colors/safe");

// Inicializamos limite con 10 por defecto
const listarTabla = (base, limite = 10) => {
    console.log("==========================================".green);
    console.log(`=== Tabla del ${base} con límite ${limite}`.blue);
    console.log("==========================================".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

//Por defecto le pongo base = 5
const crearArchivo = (base = 5, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";

        // Controla que sea número
        if (!Number(base)) {
            reject("La base ingresada no es un número");
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFileSync(`tablas/Tabla del ${base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(colors.green(`Tabla del ${base}.txt`, "creado"));
            }
        });
    });
};

const crearArchivoAsync = async (base = 5, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";

        // Controla que sea número
        if (!Number(base)) {
            reject("La base ingresada no es un número");
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFileSync(`tablas/Tabla del ${base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(colors.green(`Tabla del ${base}.txt`, "creado"));
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};
