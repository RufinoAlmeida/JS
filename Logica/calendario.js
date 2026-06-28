const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log ('CONVERSÃO')

leitor.question('Digite a quantidade de Dias: ', (entrada1) => {
    leitor.question('Digite a quantidade de Horas: ', (entrada2) =>{
        leitor.question('Digite a quantidade de Minutos: ', (entrada3) => {
            leitor. question('Digite a quantidade de Segundos: ', (entrada4) => {
    
                const dias = Number(entrada1)
                const horas = Number(entrada2)
                const minutos = Number(entrada3)
                const segundos = Number(entrada4) 
    
                    const soma = (dias * 24 * 3600) + (horas * 3600) + (minutos * 60) + segundos

                        console.log(`Total de segundos ${soma}`)
                            leitor.close();

            })
        
        })
    
    
    
    })   



})




