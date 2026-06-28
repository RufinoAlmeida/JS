const readline = require ('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite o valor do salário: R$', (entrada) => {
    const salario = Number(entrada.replace (',', '.'));
    if (isNaN(salario)) {
        console.log("Por favor, digite um valor númerio válido!");
    }else{
        if (salario > 1200) {
            console.log("Resultado: Esta pessoa DEVE pagar imposto.")
        }else {
            console.log("Resultado: Esta pessoa NÃO deve pagar imposto.")
        }
    }

    leitor.close();
})