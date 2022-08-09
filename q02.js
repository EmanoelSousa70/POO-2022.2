const input = require('prompt-sync')()

//Entrada
parseFloat (bitcoin_hoje = Number(input('Digite a cotação do bitcoin: ')))
parseFloat (real = Number(input('Digite quanto voce quer converter para real(R$): ')))

//Processamento
parseFloat (real_bitcoin = real * bitcoin_hoje)
    console.log(real_bitcoin)
//Saida
console.log('Logo R$',real,'equivale em bitcoin a',real_bitcoin.toFixed(0))