/* Para interagir com o usuário e pedir dados (input) no Node.js,
o proceso é um pouco diferente do navegador. Não existe um "prompt"
nativo simples, então usamos um módulo padrão no Node chamado readline */

// Importa o módulo que lê o que escrevemos no terminal
const readline = require('readline');

// Cria a interface de comunicação
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o valor de A
leitor.question('Digite o valor de A: ', (entradaA) => {
    
    // Pergunta o valor de B
    leitor.question('Digite o valor de B: ', (entradaB) => {
        
        // CONVERSÃO: O terminal recebe "texto". Precisamos transformar em Número.
        const a = Number(entradaA);
        const b = Number(entradaB);

        // Verifica se o usuário digitou números válidos
        if (isNaN(a) || isNaN(b)) {
            console.log("Por favor, digite apenas números!");
        } else {
            // 5. Realiza o cálculo: 2a * 3b
            const resultado = (2 * a) * (3 * b);
            
            console.log(`\n--- RESULTADO ---`);
            console.log(`Para A=${a} e B=${b}`);
            console.log(`O cálculo (2 * ${a}) * (3 * ${b}) é igual a: ${resultado}`);
        }

        // Encerra o programa
        leitor.close();
    });
});