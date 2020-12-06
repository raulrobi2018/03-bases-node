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
    .command(
        "crear",
        "Crea archivo txt con la multiplicación según los parámetros recibidos",
        {
            base: {
                demand: true,
                alias: "b"
            },
            limite: {
                alias: "l",
                default: 10
            }
        }
    )
    .help().argv;

const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((archivo) =>
                console.log(`Se ha creado el archivo ${archivo}`)
            )
            .catch((error) => console.log(error));
        break;

    default:
        console.log("Comando no reconocido");
        break;
}
