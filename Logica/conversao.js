const readline = require ('readline');
    
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== CONVERSOR DE METROS PARA MILÍMETROS ===")

leitor.question('Digite o valor em metros (ex: 1.5):', (entrada) => {
    
    //Troca virgula por ponto (caso o usuário digite 1,5) e converte para Número
    const metros = Number(entrada.replace (',' , '.'))

    //Verifica se é um número válido usando o isNaN
    if(isNaN(metros)) {
        console.log("Erro: Por favor, digite um número válido!");
    } else {

        // --- LÓGICA DA CONVERSÃO ---
        const milimetros = metros * 1000;
        
        console.log("\n--- RESULTADO ---");
        console.log(`${metros} metro(s) equivale(m) a ${milimetros} milímetro(s).`);
    }

    // Encerra o programa
    leitor.close();
})