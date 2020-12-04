const fs = require("fs");

let base = 6;

let data = "";

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i} \n`;
}

fs.writeFile(`tablas/Tabla del ${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`Se ha creado el archivo "Tabla del ${base}.txt"`);
});
