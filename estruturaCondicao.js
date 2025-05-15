// If - else if - else
let nome = "Romulo";
if (nome == "Romulo") {
    console.log("O nome é Romulo");
}
else if (nome == "Lucas") {
    console.log("O nome é Lucas");
}
else if (nome == "João") {
    console.log("O nome é João");
}
else {  
    console.log("O nome não é Romulo, Lucas ou João")  
}

console.log("FUP - calcule a média aritimetica de 3 notas de um aluno e mostre, se a nota for menor que 3 é horrível,menor que 7 da para melhorar, e maior que 7 excelente");
let nota1 = 10;
let nota2 = 10;
let nota3 = 10;
let media = (nota1 + nota2 + nota3) / 3;
if (media < 3) {
    console.log("Horrível");
}else if (media < 7) {
    console.log("Da para melhorar");
}
else if (media >= 7) {
    console.log("Excelente");
}

const idadeRomulo = 40;
const idadeKeity = 30;
const idadeVitor = 37;
const idadeLucas = 25;

const mediaIdade = (idadeRomulo + idadeKeity + idadeVitor + idadeLucas) / 4;
if (mediaIdade < 30) {
    console.log("A média de idade é menor que 30");
}
else if (mediaIdade < 40) {
    console.log("A média de idade é menor que 40");
} 
else if (mediaIdade < 50) {
    console.log("A média de idade é menor que 50");
}
else {
    console.log("A média de idade é maior que 50");
}
