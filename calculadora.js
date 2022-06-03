
const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

let numeroA = +process.argv[2];
let numeroB = +process.argv[3];

console.log("resultado de la sumar ",(numeroA,));
console.log("resultado de la restar ", restar(numeroA,numeroB));
console.log("resultado de la multiplicaion ", multiplicar(numeroA,numeroB));
console.log("resultado de la divicion ", (numeroA,numeroB));
