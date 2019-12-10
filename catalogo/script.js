/*
    Modelo do card das plantas
        
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
*/


for(var i = 0; i < db.plantas.length; i++){
    document.getElementById('catalogoPlantas').innerHTML += 
    
    `<div class="plantaSubInfo">
        <img class="fotoPlanta" src="${db.plantas[i].linkImagem}" alt="Foto da planta">
        <ul id="listaIconesPlanta">
            <li id="iconeSol"><img src="${db.plantas[i].linkLuz}" alt=""></li>
            <li id="iconeAgua"><img src="${db.plantas[i].linkAgua}" alt=""></li>
            <li id="iconeDificuldade"><img src="${db.plantas[i].linkDificuldade}" alt=""></li>
        </ul>
        <h3 class="nomePlanta"> <a href="../infoPlanta/infoPlanta.html?nome=${db.plantas[i].nomePlanta}"> ${db.plantas[i].nomePlanta} </a></h3>
        <p class="resumoDescricao"> ${db.plantas[i].resumo} </p>
    </div>`;
}

