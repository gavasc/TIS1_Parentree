var listaPlantas = [];

if ( localStorage.getItem('minhasPlantas') === null ) {
    alert('Você não possui plantas ainda :(');
} else {
    listaPlantas = JSON.parse(localStorage.getItem('minhasPlantas'));
    
    for(let i = 0; i < listaPlantas.length; i++){
        pegaInfos(listaPlantas[i]);
    }
}

function pegaInfos(nome){
    for(let i = 0; i < db.plantas.length; i++){
        if(db.plantas[i].nomePlanta == nome) mostrar(db.plantas[i]);
    }
}

function mostrar(item){
    document.getElementById('listaMinhasPlantas').innerHTML += `
        <div id="minhaPlanta">
            <h2 class="nomePlanta"> ${item.nomePlanta} </h2>
            <img class="imagemPlanta" src="${item.linkImagem}">
            <p class="resumoPlanta"> ${item.resumo} </p> 
            <div id="botaoRetirar">
            <button id="btnRetirarMinhasPlantas" onclick="retirarMinhasPlantas()"> Retirar essa planta </button>
        </div>
        </div>
    `
}