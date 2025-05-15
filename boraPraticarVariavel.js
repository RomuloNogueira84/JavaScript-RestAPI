console.log("Faça um programa (FUP) para subtrair dois numeros; ")
console.log("=======================================================");
const num1 = 10;
const num2 = 5;
const resultado = num1 - num2;
console.log(" O resultado da subtração solicitada neste programa é: " + resultado + " .");
console.log("=======================================================");

console.log("Faça um programa (FUP) para dividir dois numeros; ")
console.log("=======================================================");

const num3 = 256;
const num4 = 8;
const resultadoDivisao = num3 / num4;
console.log(" O resultado da divisão solicitada neste programa é: " + resultadoDivisao + " .");
console.log("=======================================================");

console.log("Faça um programa (FUP) para multiplicar dois numeros; ")
console.log("=======================================================");

const num5 = 1024;
const num6 = 2;
const resultadoMultiplicacao = num5 * num6;
console.log(" O resultado da multiplicação solicitada neste programa é: " + resultadoMultiplicacao + " .");
console.log("=======================================================");

console.log("=======================================================");
console.log(" Faça um programa (FUP) calcule o dobro de um numero; ");
const num17 = 32;
const dobroValor = num17 * num17;
console.log(" O resultado do dobro do numero solicitado neste programa é: " + dobroValor + " .");
console.log("=======================================================");

console.log(" Faça um programa (FUP) calcule a media de 3 numeros; ");
console.log("=======================================================");
const nota1Romulo = 8.9;
const nota2Romulo = 7.5;
const nota3Romulo = 9.0;
const mediaRomulo = (nota1Romulo + nota2Romulo + nota3Romulo) / 3;
console.log(" A média das notas do aluno Romulo é: " + mediaRomulo.toFixed(2) + " .");
console.log("=======================================================");
console.log(" Poderia ter feito essa FUP com um array e ficaria assim:");
let notasKeity = [8.9, 7.5, 9.0];
let mediaKeity = (notasKeity[0] + notasKeity[1] + notasKeity[2]) / notasKeity.length;
console.log(mediaKeity.toFixed(2));
console.log("=======================================================");

console.log(" Faça um programa (FUP) que converta a temperatura de Celsius para Fahrenheit ; ");
const temperaturaCelsius = 25;
const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log(" A temperatura de " + temperaturaCelsius + "°C é igual a " + temperaturaFahrenheit + "°F.");

console.log("=======================================================");

console.log("====== Desafio =======");
console.log(" Faça um programa (FUP) que verifique se um número é par ou ímpar; ");
const numero = 7;
if (numero % 2 === 0) {
    console.log(" O número " + numero + " é par.");
} else if (numero % 2 !== 0) {
    console.log(" O número " + numero + " é ímpar.");
};