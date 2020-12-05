const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", {
        base: {
            // obligatorio
            demand: true,
            alias: "b"
        },
        limite: {
            alias: "l",
            default: 10
        }
    })
    .help().argv;

const {crearArchivo} = require("./multiplicar/multiplicar");

console.log(argv);

console.log("Base", argv.base);
console.log("Límite", argv.limite);

/*
crearArchivo(paramArr[1])
    .then((archivo) => console.log(`Se ha creado el archivo ${archivo}`))
    .catch((error) => console.log(error));
 */
