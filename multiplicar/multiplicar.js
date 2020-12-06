const fs = require("fs");

// Inicializamos limite con 10 por defecto
const listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
    }
};

const crearArchivo = (base, limite = 10) => {
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

        fs.writeFile(`tablas/Tabla del ${base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`Tabla del ${base}.txt`);
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};
