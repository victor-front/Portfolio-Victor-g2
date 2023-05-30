const projetos = {//Objetos que armazenam valores fundamentas para os elementos/projetos
	nome: ['Teste1', 'Teste2', 'Teste3'],
	caminho: ['#', '#', '#'],
	caminhoIMG: ['../img/teste.png', '../img/teste.png', '../img/teste.png']
}

function adicionar(){//Adicionar os elementos na sessão
	for(c=0;c<projetos.nome.length;c++){
		document.querySelector(".portfolio-corpo").innerHTML += `
			<div class="item-gen">
				<a class="item-link" rel="external" href="${projetos.caminho[c]}" target="_blank">
					<div class="item-header">
						<h2>${projetos.nome[c]}</h2>
					</div>
					<div class="item-padding">
						<div class="item-body" style="background-image: url('${projetos.caminhoIMG[c]}');">
						</div>
					<div>
				</a>
			</div>
		`;
	}
}adicionar();//Chamar a função "adicionar();"