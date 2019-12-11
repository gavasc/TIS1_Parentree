var dbRel = {
    'relatos':[]
}

if(localStorage.getItem('dbRel') != null) {
    dbRel = JSON.parse(localStorage.getItem('dbRel'));
    for(let i = 0; i < dbRel.relatos.length; i++){
        let e = dbRel.relatos[i];
        forum.relatos.push(e);
    }
}

for(var i = 0; i < forum.relatos.length; i++){
    document.getElementById('relato').innerHTML += 
        `<div class="infoRelato">
            <a id="planta" href="../infoPlanta/infoPlanta.html?nome=${forum.relatos[i].planta}"> ${forum.relatos[i].planta}</a>
            <p id="user_data"> por ${forum.relatos[i].user} | ${forum.relatos[i].data} </p>
            <p id="relato"> ${forum.relatos[i].relato} </p>
        </div>`
    ;
}