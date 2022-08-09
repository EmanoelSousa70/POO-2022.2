const input = require('prompt-sync')()

function main(){
    const  milisegundos = Number(input('Digite um valor em milisegundos: '))
    console.log(milisegundos,'milisegundos =',converter(milisegundos))
}

function converter(milisegundos){     
    segundos = ( milisegundos / 1000 ) % 60    
    minutos  = ( milisegundos / 60000 ) % 60     
    horas    = milisegundos / 3600000 % 24 
    dias     = milisegundos / 86400000      
    return (`${dias.toFixed(1)} dias--${horas.toFixed(1)}:${minutos.toFixed(1)}:${segundos.toFixed(1)}`)
}

main()