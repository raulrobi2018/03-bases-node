const {crearArchivo} = require("./multiplicar/multiplicar");

// Estos son objetos globales de Node que proveen información acerca del sistema y de los procesos
console.log("Module", module);
console.log("Process", process.argv);

/* Para recibir parámetros en línea de comandos, se debe tomar el parámetro que
pasamos según su posición. El atributo argv ya posee 2 valores, que son la uticación
física de Node y la del proyecto en el que estamos trabajando. 
Si por línea de comandos llamamos a nuestro programa de esta forma:
npm app --base=5
le estamos pasando un parámetro más para nuestra función crearArchivo. Este parámetro
estará en la posición 2 del array argv */
let argv = process.argv;
let param = argv[2];
let paramArr = param.split("=");

console.log(paramArr[1]);

crearArchivo(paramArr[1])
    .then((archivo) => console.log(`Se ha creado el archivo ${archivo}`))
    .catch((error) => console.log(error));
