const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar");

//Para leer argumentos de linea de comandos
const argv = require("./config/yargs");

let comando = argv._[0];

//Otra forma de obtener los argumentos ingresados en líne de comandos
//es desestructurando process.argv pero no se recomienda
//const [, , arg3 = 'base=5'] = process.argv;
//Aquí solo nos interesa la base
//const [ , base] = arg3.split("=");

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.hasta);
        break;
    case "crear":
        crearArchivo(argv.base, argv.listar, argv.hasta)
            .then((archivo) =>
                console.log(`Se ha creado el archivo ${archivo}`)
            )
            .catch((error) => console.log(error));
        break;

    default:
        console.log("Comando no reconocido");
        break;
}
