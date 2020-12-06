const opts = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
};

const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", opts)
    .command(
        "crear",
        "Crea archivo txt con la multiplicación según los parámetros ecibidos",
        opts
    )
    .help().argv;

module.exports = {
    argv
};
