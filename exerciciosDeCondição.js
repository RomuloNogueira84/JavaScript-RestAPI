//FUP - faça um programa  que solicite a operação aritmética de dois  números, calcule a operação solicitada e informe o resultado.

//entrada
const numero1 = 150;
const numero2 = 50;

let raizQuadrada = Math.sqrt(numero1);
let raizQuadrada2 = Math.sqrt(numero2);
let soma = raizQuadrada + raizQuadrada2;

console.log(" A soma da raiz quadrada dos numeros é : " + soma.toFixed(2) + " .");
console.log("=======================================================");

//FUP - faça um programa  que peça um numero e imprima uma mensagem se esse numero é positivo ou negativo.
const numero3 = -177;
if (numero3 > 0) {
    console.log(" O numero " + numero3 + " é positivo.");
} else if (numero3 < 0) {
    console.log(" O numero " + numero3 + " é negativo.");
};
const numero4 = 153;
if (numero4 > 0) {
    console.log(" O numero " + numero4 + " é positivo.");
} else if (numero4 < 0) {
    console.log(" O numero " + numero4 + " é negativo.");
};
console.log("=======================================================");
//FUP - faça um programa  que solicite um numero e veja se ele é par ou impar.

const numero5 = 10;
if (numero5 % 2 === 0) {
    console.log(" O numero " + numero5 + " é par.");
}
else if (numero5 % 2 !== 0) {
    console.log(" O numero " + numero5 + " é impar.");
};

const numero6 = 11;
if (numero6 % 2 === 0) {
    console.log(" O numero " + numero6 + " é par.");
}
else if (numero6 % 2 !== 0) {
    console.log(" O numero " + numero6 + " é impar.");
};
console.log("=======================================================");

//FUP - Que solicite dois numeros e verifique qual é o maior.
const numero7 = 10;
const numero8 = 20;

if (numero7 > numero8) {
    console.log(" O numero " + numero7 + " é maior que " + numero8);
}
else if (numero7 < numero8) {
    console.log(" O numero " + numero8 + " é maior que " + numero7);
}
else if (numero7 === numero8) {
    console.log(" Os numeros " + numero7 + " e " + numero8 + " são iguais.");
};

console.log("=======================================================");


// Desafios 

//FUP - que solicite tres numeros e verifique qual é o menor.
const numero9 = 10;
const numero10 = 20;
const numero11 = 30;
if (numero9 < numero10 && numero9 < numero11) {
    console.log(" O numero " + numero9 + " é o menor.");
}
else if (numero10 < numero9 && numero10 < numero11) {
    console.log(" O numero " + numero10 + " é o menor.");
}
else if (numero11 < numero9 && numero11 < numero10) {
    console.log(" O numero " + numero11 + " é o menor.");
}
else if (numero9 === numero10 && numero9 === numero11) {
    console.log(" Os numeros " + numero9 + ", " + numero10 + " e " + numero11 + " são iguais.");
};
console.log("=======================================================");
//FUP - que peça um ano e verifique se ano informado é bissexto.
const ano = 2024;
if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
    console.log(" O ano " + ano + " é bissexto.");
}
else {
    console.log(" O ano " + ano + " não é bissexto.");
}
console.log("=======================================================");
