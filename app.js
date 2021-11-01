let altura = 0 
let largura = 0
let life = 1

let tempo =60


let nivel = window.location.search
nivel = nivel.replace('?','')


let criaTempo = 1000

if(nivel === 'normal'){
    criaTempo = 1000
}



if(nivel === 'dificil'){
    criaTempo = 850
}


if(nivel === 'muitodificil'){
    criaTempo = 750
}

function ajustaTamanhoJogo(){
altura = window.innerHeight
largura = window.innerWidth



console.log(largura, largura)
}

ajustaTamanhoJogo()

let cronometro = setInterval(function(){
    tempo--
    

    if(tempo< 0 ){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'win.html'
    }
    
   else {
    document.getElementById('cron').innerHTML = tempo
   }
    }  , 1000)


   

function posicaoAleatoria (){
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    if(life > 3){
        window.location.href = 'fimjogo.html'
    }
    document.getElementById('cora' + life).src="imagens/coracao_vazio.png"

    life++
}



let posicaoX = Math.floor (Math.random() *  largura) - 90

let posicaoY = Math.floor(Math.random() * altura) - 90


posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)


let mosquito = document.createElement('img')
mosquito.src="imagens/mosca.png"
mosquito.className=tamanhoAleatorio() +' ' + ladoAleatorio()
mosquito.style.right = posicaoX + "px"
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = "absolute"


mosquito.id = 'mosquito'
mosquito.onclick = function (){
    this.remove()
}


document.body.appendChild(mosquito )


console.log(tamanhoAleatorio ())
console.log(ladoAleatorio())
}

posicaoAleatoria ()


function tamanhoAleatorio (){
    let classe = Math.floor(Math.random() * 3)
    console.log(classe)


    switch(classe) {
        case 0 :
        return 'mosquito1'
       

        case 1 :
            return 'mosquito2'
            


            case 2:
                 return 'mosquito3'

                


                 default :
                 alert('erro')
    }
}


function ladoAleatorio (){
    let lado = Math.floor(Math.random() * 2)
    console.log(lado)


    switch(lado) {
        case 0 :
        return 'lado1'
       

        case 1 :
            return 'lado2'
            


            


                 default :
                 alert('erro')
    }
}

let criaMosquito = setInterval(function(){posicaoAleatoria ()}, criaTempo)