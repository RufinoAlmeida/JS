const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('DESCONTE DE MERCADORIA')

leitor.question('Qual o valor da mercadoria? ' ,(entrada1) => {
    leitor.question('Qual o valor do desconto? ' ,(entrada2) => {

        const mercadoria = Number(entrada1)
        const desconto = Number(entrada2)

            const valor_final = mercadoria - (mercadoria * (desconto/100)) 

                console.log(`O valor da mercadoria agora é ${valor_final }`)
            
    })       
            

})