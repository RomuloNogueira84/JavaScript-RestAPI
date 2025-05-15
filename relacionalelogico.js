const a = 7;
const b = 5;

const todos = {
  igual: a == b,
  diferente: a != b,
  maiorQue: a > b,
  menorQue: a < b,
  maiorOuIgual: a >= b,
  menorOuIgual: a <= b,
};

console.log(todos);
console.log("A variável a é igual a b? ", todos.igual);
console.log("A variável a é diferente de b? ", todos.diferente);
console.log("A variável a é maior que b? ", todos.maiorQue);
console.log("A variável a é menor que b? ", todos.menorQue);
console.log("A variável a é maior ou igual a b? ", todos.maiorOuIgual);
console.log("A variável a é menor ou igual a b? ", todos.menorOuIgual);


// Operadores lógicos
const c = 10;
const d = 20;
const e = 30;
const f = 40;
const todosLogicos = {
  e: c > d && e < f,
  ou: c > d || e < f,
  nao: !(c > d),
};
console.log(todosLogicos);
console.log("A variável c é maior que d e e é menor que f? ", todosLogicos.e);
console.log("A variável c é maior que d ou e é menor que f? ", todosLogicos.ou);
console.log("A variável c não é maior que d? ", todosLogicos.nao);
