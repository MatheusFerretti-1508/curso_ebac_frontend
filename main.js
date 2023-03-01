

let formNumero = document.getElementById('form-numero')

function validaNumero (){
    let numeroEspacoA = document.getElementById('numero-a')
    let numeroEspacoAfom = Number(numeroEspacoA.value)
    let numeroEspacoB = document.getElementById('numero-b')
    let numeroEspacoBfom = Number(numeroEspacoB.value)
    let resp = document.getElementById('res')
    
    if (numeroEspacoAfom > numeroEspacoBfom){
        resp.innerHTML = `O valor é INVÁLIDO`
    } else{
        resp.innerHTML = 'O valor é VÁLIDO'
    }
}

formNumero.addEventListener("submit", function (e) {
    e.preventDefault();
    validaNumero();
    })
