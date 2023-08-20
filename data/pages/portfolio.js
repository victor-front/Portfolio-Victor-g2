const projetos = {//Objetos que armazenam valores fundamentas para os elementos/projetos
	nome: [
	'Sign Up', 
	'Discord Profile', 
	'ClockJS',
	'Twitter Profile', 
	'Quiz Maker', 
	'Calculadora'],
	caminho: [
	'https://victor-front.github.io/signup/', 
	'https://victor-front.github.io/Discord-Profile/', 
	'https://victor-front.github.io/clock/',
	'https://victor-front.github.io/Twitter-Profile/',
	'https://victor-front.github.io/quiz_maker/',
	'https://victor-front.github.io/calculadora/'],
	caminhoIMG: [
	'../img/thumbs/signup.png', 
	'../img/thumbs/discord-profile.png', 
	'../img/thumbs/clock.png',
	'../img/thumbs/twitter.png',
	'../img/thumbs/quiz-maker.png',
	'../img/thumbs/calculadora.png']
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