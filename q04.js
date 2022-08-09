const input = require('prompt-sync')()

//Entrada
var mes = Number(input('digite numero correspondente ao mes: '))

//Processamento

if (mes <=0){
    console.log('numero invalido!')
}
else if (mes == 1){
    console.log('Janeiro','31 dias')
}
else if (mes == 2){
    console.log('Fevereiro','28 dias')
}
else if (mes == 3){
    console.log('Março','31 dias')
}
else if (mes == 4){
    console.log('Abril','30 dias')
}
else if (mes == 5){
    console.log('Maio','31 dias')
}
else if (mes == 6){
    console.log('Junho','30 dias')
}
else if (mes == 7){
    console.log('Julho','31 dias')
}
else if (mes == 8){
    console.log('Agosto','30 dias')
}
else if (mes == 9){
    console.log('Setembro','31 dias')
}
else if (mes == 10){
    console.log('Outubro','30 dias')
}
else if (mes == 11){
    console.log('Novembro','31 dias')
}
else if (mes == 12){
    console.log('Dezembro','30 dias')
}