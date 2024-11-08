/**
 * Simples simulador de uma lampada
 * @author João Victor
 */

//variaveis de apoio logico
let chave = false // o interruptor inicia desligado
let lampada = true // a lampada nao esta quebrada 

function quebrar() {
    if (lampada === true){
        document.getElementById('lamp').src = "img/broken.jpg"
    //reproduzindo um arquivo de audio do JS
    //passo 1: copiar o arquivo de audio para o projeto
    //passo 2: Usar a classe Audio(biblioteca interna do Js)

    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
    // apoio a logica para o Js indetificar a lampada quebrada
    lampada = false
    
    }
}

function onoff() {

    if (chave === false && lampada === true) {
        // ligar a chave 
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true // o Js agora sabe que a chave esta ligada 
        document.getElementById('lamp').src = "img/on.jpg"
        //acender a lampada 
    } else {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false// o Js agora sabe que a chave esta desligada
        document.getElementById('lamp').src = "img/off.jpg"
        //apagar a lampada 
    }
}