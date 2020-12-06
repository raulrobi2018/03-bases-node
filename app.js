const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;

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
