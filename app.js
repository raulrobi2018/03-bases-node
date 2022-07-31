const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar");

//Para leer argumentos de linea de comandos
const argv = require("./config/yargs").argv;

//Para imprimir en colores
const colors = require("colors");

let comando = argv._[0];

//Otra forma de obtener los argumentos ingresados en líne de comandos
//es desestructurando process.argv
//const [, , arg3 = 'base=5'] = process.argv;
//Aquí solo nos interesa la base
//const [ , base] = arg3.split("=");

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
