const input = require('prompt-sync')()

listas_num = []
soma = 0

while(true){
    var numero = Number(input('digite um numero inteiro (para encerrar digite(-1): '))
    if (numero == -1){
        break
    }
    else{
        listas_num.push(numero)
        soma = soma + numero
        var media = 0;
        for (var i = 0;i < listas_num.length; i++) {
            media += listas_num[i];
        }
        media = media/listas_num.length;
        var varianca = 0;
        for (var i = 0;i < listas_num.length; i++) {
            varianca += (media - listas_num[i]) * (media - listas_num[i]);
        }
        varianca = varianca/listas_num.length;
        Math.sqrt(varianca);
        
    }
    console.log('A soma dos numeros é igual a',soma,'e a media aritimetica é',media ,'desvio padrao',varianca)
}