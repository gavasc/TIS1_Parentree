var filtrosSelec = [];

var filtros = document.getElementsByClassName('checkboxFiltros');

var pegaFiltros = function(){
    var j = 0;

    for(var i = 0; i < filtros.length; i++){
        if(filtros[i].checked){
            filtrosSelec[j] = filtros[i].name;
            j++;
        }
    }

    console.log(filtrosSelec);
}