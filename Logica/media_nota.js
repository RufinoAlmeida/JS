const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== CALCULADORA DE MÉDIA ===");

leitor.question('Digite a nota da 1ª matéria: ', (entrada1) => {
    
    leitor.question('Digite a nota da 2ª matéria: ', (entrada2) => {
        
        leitor.question('Digite a nota da 3ª matéria: ', (entrada3) => {
            
           
            const nota1 = Number(entrada1.replace(',', '.'));
            const nota2 = Number(entrada2.replace(',', '.'));
            const nota3 = Number(entrada3.replace(',', '.'));

            if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
                console.log("\nErro: Por favor, digite apenas números válidos!");
            } else {
                
                // --- LÓGICA DO CÁLCULO ---
                const media = (nota1 + nota2 + nota3) / 3;
                
                console.log("\n--- RESULTADO FINAL ---");
                console.log(`A média do aluno foi: ${media.toFixed(2)}`);

                if (media > 6) {
                    console.log("Status: APROVADO! (Média maior que 6)");
                } else {
                    console.log("Status: REPROVADO. (Média igual ou menor que 6)");
                }
            }

            // Encerra o programa após o resultado
            leitor.close();
            
        }); 
    }); 
}); 