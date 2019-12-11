for(var i = 0; i < forum.relatos.length; i++){
    document.getElementById('relato').innerHTML += 
        `<div class="infoRelato">
            <a id="planta" href="../infoPlanta/infoPlanta.html?nome=${forum.relatos[i].planta}"> ${forum.relatos[i].planta}</a>
            <p id="user"> por ${forum.relatos[i].user}</p>
            <p id="datapublicação"> ${forum.relatos[i].data}</p>
            <p id="relato"> ${forum.relatos[i].relato} </p>
        </div>`
    ;
}