var filtrosCat = document.getElementsByClassName('filtroCategoria');
var filtrosLuz = document.getElementsByClassName('filtroSol');
var filtrosAgua = document.getElementsByClassName('filtroAgua');

// Varre o DB, seleciona e adiciona na página web todos as plantas que correspondem
//aos filtros selecionados
function comparaFiltroDB(){
    var filtrosSelec = pegaFiltros();

    if(filtrosSelec.length != 0){
        document.getElementById('catalogoPlantas').innerHTML = "";
    }

    db.plantas.forEach(item => {

        if( contem(item.tags, filtrosSelec.cat) && contem(item.tags, filtrosSelec.luz) && contem(item.tags, filtrosSelec.agua) ){//contemTodos(item.tags, filtrosSelec)) {
            imprime(item);
        }

    });

    console.log(filtrosSelec);
}

// Varre o array do filtro para verificar se o array tags contém algum elemento do mesmo
function contem(tags, filtro){

    var result = false;
    
    if(filtro.length > 0){

        for(let i = 0; i < filtro.length; i++){
            if( tags.includes( filtro[i]) ) result = true;
        }

    } else result = true;

    return result;
}

// Adiciona a planta passada como parametro dentro da div 'catalogoPlantas'
//de acordo com a formatação do card de plantas
function imprime(planta) {
    document.getElementById('catalogoPlantas').innerHTML += 
    
    `<div class="plantaSubInfo">
        <img class="fotoPlanta" src="${planta.linkImagem}" alt="Foto da planta">
        <ul id="listaIconesPlanta">
            <li id="iconeSol"><img src="${planta.linkLuz}" alt=""></li>
            <li id="iconeAgua"><img src="${planta.linkAgua}" alt=""></li>
            <li id="iconeDificuldade"><img src="${planta.linkDificuldade}" alt=""></li>
        </ul>
        <h3 class="nomePlanta"> <a href="../infoPlanta/infoPlanta.html?nome=${planta.nomePlanta}"> ${planta.nomePlanta} </a></h3>
        <p class="resumoDescricao"> ${planta.resumo} </p>
    </div>`;
}

// Verifica todos os filtros e pega o nome daqueles que estão marcados e os coloca no vetor
//de filtros selecionados
function pegaFiltros(){

    var filtrosSelec = {
        'cat': [],
        'luz': [],
        'agua': []
    };

    var j = 0;

    for(var i = 0; i < filtrosCat.length; i++){
        if(filtrosCat[i].checked){
            filtrosSelec.cat[j] = filtrosCat[i].name;
            j++;
        }
    }
    j=0;
   for(var i = 0; i < filtrosLuz.length; i++){
        if(filtrosLuz[i].checked){
            filtrosSelec.luz[j] = filtrosLuz[i].name;
            j++;
        }
    }
    j=0;
    for(var i = 0; i < filtrosAgua.length; i++){
        if(filtrosAgua[i].checked){
            filtrosSelec.agua[j] = filtrosAgua[i].name;
            j++;
        }
    }

    return filtrosSelec;
}