console.log("Hello, world!");
// logica de programação fazer um suco de laranja 🍊

// Função principal para preparar o suco de laranja
function fazerSucoDeLaranja() {
    console.log(" Iniciando preparo do suco de laranja...");

    console.log("🔹 Organizando a bancada...");

    let temEspremedor = true;
    let laranjas = 2;
    let temFaca = true;

    if (!temEspremedor) {
        console.log("❌ Sem espremedor! Processo interrompido.");
        return;
    }

    console.log("🔹 Pegando o espremedor e as laranjas...");

    console.log("🔹 Lavando as laranjas...");

    if (!temFaca) {
        console.log("❌ Sem faca! Processo interrompido.");
        return;
    }

    console.log("🔹 Cortando as laranjas...");
    let cortouSemSeMachucar = Math.random() > 0.1; // Simulando a chance de se cortar

    if (!cortouSemSeMachucar) {
        console.log("🚨 Corte acidental! Parando para cuidar do ferimento.");
        return;
    }

    console.log("🔹 Ligando o espremedor...");
    console.log("🔹 Espremendo as laranjas...");

    let suco = "🥤 Suco de Laranja Fresco";

    console.log("🔹 Removendo bagaço e sementes...");

    let adicionarAcucar = true;
    let adicionarGelo = true;

    if (adicionarAcucar) {
        console.log("🔹 Adicionando açúcar...");
    }

    if (adicionarGelo) {
        console.log("🔹 Adicionando gelo...");
    }

    console.log("🔹 Mexendo o suco até atingir o ponto ideal...");
    console.log(`=== Suco pronto! Servindo... ${suco} ===`);

    return suco;
}


fazerSucoDeLaranja();