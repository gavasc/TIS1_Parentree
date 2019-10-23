/*
    Modelo do card das plantas
    
    <li class="itemPlanta"> <!-- Em cada "li" terá um div contendo as infos resumidas da planta -->
        <div class="plantaSubInfo"> <!--Modelo dos cards que serão preenchidos pelo JavaScript-->
            <img class="fotoPlanta" src="" alt="Foto da planta">
            <ul id="listaIconesPlanta">
                <li id="iconeSol"><img src="" alt=""></li>
                <li id="iconeAgua"><img src="" alt=""></li>
                <li id="iconeDificuldade"><img src="" alt=""></li>
            </ul>
            <h3 class="nomePlanta"> </h3>
            <p class="resumoDescricao"> </p>
        </div>
    </li>
*/


for(var i = 0; i < db.plantas.length; i++){
    document.getElementById('listaPlantas').innerHTML += 
    '<li class="itemPlanta">'+
        '<div class="plantaSubInfo">'+
            '<img class="fotoPlanta" src="" alt="Foto da planta">'+
            '<ul id="listaIconesPlanta">'+
                '<li id="iconeSol"><img src="" alt=""></li>'+
                '<li id="iconeAgua"><img src="" alt=""></li>'+
                '<li id="iconeDificuldade"><img src="" alt=""></li>'+
            '</ul>'+
            `<h3 class="nomePlanta"> ${db.plantas[i].nomePlanta} </h3>`+
            `<p class="resumoDescricao"> ${db.plantas[i].resumo} </p>`+
        '</div>'+
    '</li>';    
}

