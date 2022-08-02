//const {options} = require("yargs");

//FORMA ANTERIOR
// const opts = {
//     base: {
//         demand: true,
//         alias: "b"
//     },
//     limite: {
//         alias: "l",
//         default: 10
//     }
// };

const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar"
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        demandOption: true,
        default: 10,
        describe: "Es el límite hasta donde quieres la tabla"
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false,
        describe: "Muestra la tabla en consola"
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número";
        }

        return true;
    }).argv;

//FORMA ANTERIOR
// .command("listar", "Imprime en consola la tabla de multiplicar", opts)
// .command(
//     "crear",
//     "Crea archivo txt con la multiplicación según los parámetros ecibidos",
//     opts
// )
// .help().argv;

module.exports = argv;
