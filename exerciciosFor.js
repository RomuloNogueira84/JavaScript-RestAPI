//FUP - faça um programa que conte os numeros pares entre 0 e 200.
const pares = [];
const  impares = [];
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    } else {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
}
console.log("============================================================================");
console.log("Como solicitado pelo programa segue os numeros pares entre 0 e 200 :  ", pares);
console.log("============================================================================");
console.log("Como solicitado pelo programa segue os numeros impares entre 0 e 200 :  ", impares);
console.log("============================================================================");


//FUP - faça um programa que some todos os numeros entre -35 e 75.
let soma = 0;
for (let i = -35; i <= 75; i++){
    soma += i;
}
console.log("============================================================================");
console.log("Como solicitado pelo programa segue a soma de todos os numeros entre -35 e 75 : ", soma);
console.log("============================================================================");

//FUP - faça um programa que recebe um numero e itere de 0 até o numero informado, multiplicando os valores.
const num = 5;
let multiplicacao = 1;
for (let i = 0; i <= num; i++){
    multiplicacao *= i;
} 
console.log("============================================================================");
console.log("Como solicitado pelo programa segue a multiplicacao de todos os numeros entre 0 e ", num, " : ", multiplicacao);
console.log("============================================================================");
const num2 = 24;
let mult = 1;
for (let i = 1; i <= num2; i++){
    mult *= i;  
} 
console.log("============================================================================");
console.log("Como solicitado pelo programa segue a multiplicacao de todos os numeros entre 0 e ", num2, " : ", mult.toFixed(2));
console.log("============================================================================");