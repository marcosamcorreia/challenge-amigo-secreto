let listaDeAmigos = []
let amigo = document.querySelector("#amigo")  //Nome digitado
let campoDeAmigos = document.querySelector("#listaAmigos") //Campo de texto
let campoResultado = document.querySelector("#resultado") //Campo de resultado

function adicionarAmigo(){
    if (amigo.value==""){
        alert("Digite um nome.")

    } else{
            campoDeAmigos.innerHTML+=`<p>${amigo.value}</p>`
            listaDeAmigos.push(amigo.value)       
    }
    amigo.value=""
}

function sortearAmigo(){
    let max= listaDeAmigos.length
    if (max==0){
        alert("Adicione um nome primeiro.")
    }else if(max==1){
        alert("Adicione mais um nome")
    }else{
        let sorteia=parseInt(Math.random()*max)
        campoResultado.innerHTML=`O nome sorteado é: ${listaDeAmigos[sorteia]}`

    }
}