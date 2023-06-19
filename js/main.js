


//console.log(estatistica)
const estatistica = document.querySelectorAll("[data-estatistica]")
const controle = document.querySelectorAll(".controle-ajuste");



controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca)
    })
    
})

function manipulaDados(operacao, controle){

    const peca = controle.querySelector(".controle-contador");

    if (operacao === "-") {
     peca.value = parseInt(peca.value) - 1
    }else{
     peca.value = parseInt(peca.value) + 1
    }
 }

 const pecas = {

    
    "braco":{
        "forca": 35,
        "poder":-21,
        "energia": 5,
        "velocidade": -20,
    },

    "blindagem":{
        "forca": 45,
        "poder":-61,
        "energia": 5,
        "velocidade": -70,
    },
    "nucleos":{
        "forca": 85,
        "poder":-81,
        "energia": 5,
        "velocidade": -60,
    },
    "pernas":{
        "forca": 85,
        "poder":-91,
        "energia": 66,
        "velocidade": -80,
    },
    "foguetes":{
        "forca": 85,
        "poder":-61,
        "energia": 7,
        "velocidade": -60,
    },



 }


 function atualizaEstatistica(peca) {
    

    estatistica.forEach((elemento) =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]

    })
 }
 

