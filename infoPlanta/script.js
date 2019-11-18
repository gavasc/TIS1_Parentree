var parametros = getParams(window.location.href);

console.log(parametros);

db.plantas.forEach(item => {
    
    if (item.nomePlanta == parametros.nome) {
		document.getElementById("informacoesPlanta").innerHTML = `
		
			<a id="nome_planta">"${item.nomePlanta}"</a>
			<a id="nome_cientifico"> "${item.nomeCientifico}"</a>
			<img id="imgPrincipalPlanta" src="${item.linkImagem}">
			<div id="descricao"><a>"${item.descricao}"</a></div>
			<a id="tags">Encontrado em:<br>"${item.tags}"</a>
        `;
    }
});

function getParams(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};