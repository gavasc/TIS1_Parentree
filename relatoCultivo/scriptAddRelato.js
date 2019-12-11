$('#btnAdicionarRel').click(()=>{
    let user = $('#inputUser').val();
    let planta = $('#inputPlanta').val();
    let relato = $('#inputRelato').val();

    adicionaRelato(user, planta, relato);
});

function adicionaRelato(user, planta, relato){
    if(localStorage.getItem('dbRel') != null) dbRel = JSON.parse(localStorage.getItem('dbRel'));

    let novoRelato = {
        'user': user,
        'planta': planta,
        'data': '11/12/2019 16:00',
        'relato': relato
    };

    // Insere o novo objeto no array
    dbRel.relatos.push(novoRelato);

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbRel', JSON.stringify(dbRel));

    console.log(localStorage.getItem('dbRel'));
}

var dbRel = {
    'relatos': []
};