const fs = require("fs");

const colors = require("colors");

// Inicializamos limite con 10 por defecto
const listarTabla = (base = 5, hasta = 10) => {
    console.log("==========================================".green);
    console.log(`=== Tabla del ${base} con límite ${hasta}`.blue);
    console.log("==========================================".green);

    for (let i = 1; i <= hasta; i++) {
        console.log(`${base} ${"x".green} ${i} ${"=".green} ${base * i}`);
    }
};

//Por defecto le pongo base = 5
const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";
        let consola = "";

        // Controla que sea número
        if (!Number(base)) {
            reject("La base ingresada no es un número");
            return;
        }

        for (let i = 1; i <= hasta; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
            consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i} \n`;
        }

        if (listar) {
            console.log("==========================================".green);
            console.log(`=== Tabla del ${base} con límite ${hasta}`.blue);
            console.log("==========================================".green);

            console.log(consola);
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
