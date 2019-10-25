var filtrosSelec = [];
var filtrosCat = document.getElementsByClassName('filtroCategoria');
var filtrosLuz = document.getElementsByClassName('filtroSol');
var filtrosAgua = document.getElementsByClassName('filtroAgua');

// Varre o DB, seleciona e adiciona na página web todos as plantas que correspondem
//aos filtros selecionados
function comparaFiltroDB(){
    pegaFiltros();

    if(filtrosSelec.length != 0){
        document.getElementById('catalogoPlantas').innerHTML = "";
    }

    db.plantas.forEach(item => {
        
        if(filtrosSelec.includes(item.categoria) && (filtrosSelec.includes(item.categoria)==false && nadaMarcado(filtrosCat)==false) ){
            if(filtrosSelec.includes(item.agua) && (filtrosSelec.includes(item.categoria)==false && nadaMarcado(filtrosAgua)==false) ){
                if(filtrosSelec.includes(item.luz) && (filtrosSelec.includes(item.categoria)==false && nadaMarcado(filtrosLuz)==false) ){
                    console.log(item.nomePlanta);
                    imprime(item);
                }
            }
        }

    });
}

// Varre o array de um tipo especifico de filtro e verifica se nenhum item do filtro
//foi marcado
function nadaMarcado(array){
    for(let i = 0; i < array.length; i++){
        if (array.checked) {
            return false;
        }
    }
    return true;
}

// Adiciona a planta passada como parametro dentro da div 'catalogoPlantas'
//de acordo com a formatação do card de plantas
function imprime(planta) {
    document.getElementById('catalogoPlantas').innerHTML += 
    
    '<div class="plantaSubInfo">'+
        `<img class="fotoPlanta" src="${planta.linkImagem}" alt="Foto da planta">`+
        '<ul id="listaIconesPlanta">'+
            '<li id="iconeSol"><img src="" alt=""></li>'+
            '<li id="iconeAgua"><img src="" alt=""></li>'+
            '<li id="iconeDificuldade"><img src="" alt=""></li>'+
        '</ul>'+
        `<h3 class="nomePlanta"> ${planta.nomePlanta} </h3>`+
        `<p class="resumoDescricao"> ${planta.resumo} </p>`+
    '</div>';
}

// Verifica todos os filtros e pega o nome daqueles que estão marcados e os coloca no vetor
//de filtros selecionados
function pegaFiltros(){
    var j = 0;

    // filtrosCat.forEach(element => {
    //     if (element.checked) {
    //         filtrosSelec += element.name;
    //     }
    // });
    
    // filtrosLuz.forEach(element => {
    //     if (element.checked) {
    //         filtrosSelec += element.name;
    //     }
    // });

    // filtrosAgua.forEach(element => {
    //     if (element.checked) {
    //         filtrosSelec += element.name;
    //     }
    // });

    for(var i = 0; i < filtrosCat.length; i++){
        if(filtrosCat[i].checked){
            filtrosSelec[j] = filtrosCat[i].name;
            j++;
        }
    }

   for(var i = 0; i < filtrosLuz.length; i++){
        if(filtrosLuz[i].checked){
            filtrosSelec[j] = filtrosLuz[i].name;
            j++;
        }
    }

    for(var i = 0; i < filtrosAgua.length; i++){
        if(filtrosAgua[i].checked){
            filtrosSelec[j] = filtrosAgua[i].name;
            j++;
        }
    }
}