console.log("=======================")
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroPremiado = Math.floor(Math.random() * 11);

const perguntar = () => {
  rl.question("Digite sua suposição (um número de 0 a 10): ", (input) => {
    const chute = parseInt(input);

    chute === numeroPremiado
      ? (console.log("Você acertou!"), rl.close())
      : (console.log("Você errou! Tente novamente."), perguntar());
  });
};

perguntar();



console.log("=======================")
/* criar um formulario nesse estilo
corrigir para o JSON receber uma data ao invés de string
usar o Jest para teste unitario
sempre que incluir um novo metodo, criar o teste unitario para ele
criar uma api incluir endereço para o usuario, ele poderá ter N endereços, o endereço deve ser preenchido através da busca pelo CEP (https://viacep.com.br/), completando com as informaçoes de numero e complemento passado pelo usuario.
Explicação: Vai ser criada uma API para endereços e nesta API deverá ser passado tb o ID do usuário dono do endereço que está sendo cadastrado.
(editado)
viacep.com.brviacep.com.br
ViaCEP - Webservice CEP e IBGE gratuito
Webservice gratuito para consulta de endereço via CEP, suporta Ajax e retorno nos formatos JSON ou XML.
*/






