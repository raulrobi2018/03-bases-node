const fs = require("fs");

const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = "";

        // Controla que sea número
        if (!Number(base)) {
            reject("La base ingresada no es un número");
            return;
        }

        for (let i = 1; i <= 10; i++) {
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
    crearArchivo
};
