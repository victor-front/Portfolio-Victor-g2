p = 1; //Etapas de verificação

const section1 = () => `
	<div class="cluna-nicktec">
		<p class="descricao">Olá! Eu sou <strong>Victor Aguiar</strong>, tenho 17 anos e amo expressar minhas artes e sentimentos por onde quer que eu passo!</p>
		<div class="secao-tecnologias">
			<img src="data/html5.png" class="tec-img">
			<img src="data/css3.png" class="tec-img">
			<img src="data/js.png" class="tec-img">
			<img src="data/git.png" class="tec-img">
			<img src="data/github.png" class="tec-img">
		</div>
	</div>
	<div class="nick-pfp">
		<h1 class="nome">Victor Aguiar</h1>
		<img src="data/pfp.jpg" class="pfp">
	</div>
`;

const section2 = () => `
	<div class="nick-pfp">
		<h1 class="nome">Victor Aguiar</h1>
		<img src="data/pfp.jpg" class="pfp">
	</div>
	<div class="cluna-nicktec">
		<p class="descricao">Olá! Eu sou <strong>Victor Aguiar</strong>, tenho 17 anos e amo expressar minhas artes e sentimentos por onde quer que eu passo!</p>
		<div class="secao-tecnologias">
			<img src="data/html5.png" class="tec-img">
			<img src="data/css3.png" class="tec-img">
			<img src="data/js.png" class="tec-img">
			<img src="data/git.png" class="tec-img">
			<img src="data/github.png" class="tec-img">
		</div>
	</div>
`;

const menuNo = () => `
	<ul>
		<li><a rel="prev" href="#" target="_self">Home</a></li>
		<li><a rel="next" href="#" target="_self">Sobre</a></li>
		<li><a rel="next" href="#" target="_self">Portfólio</a></li>
		<li><a rel="next" href="#" target="_self">Serviços</a></li>
		<li><a rel="next" href="#" target="_self">Contato</a></li>
	</ul>
`

const menuRedu = () => `
	<div class="menu-ham" onclick="menu(1)">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</div>
`

const menuX = () => `
	<div class="menu-ham" style="position: relative; margin-top: 40px;" onclick="menu(2)">
		<div class="line" style="transform: rotate(320deg); left: 1px; position: absolute;"></div>
		<div class="line" style="transform: rotate(-320deg); position: absolute;"></div>
	</div>
`

function menu(valor){//Verificar se o menu deve estar aberto ou fechado
	if(valor == 1){
		document.querySelector(".nav").innerHTML = menuX();
	}else if(valor == 2){
		document.querySelector(".nav").innerHTML = menuRedu();
	}
}

function verificar(){//Sistema que verifica a largura do body
	if(p == 1){//Se p(parte, etapa) for igual a 1, fazer verificação 1
		if(document.body.clientWidth <= 680){//Se a largura do body for menor ou igual a 680...
			document.querySelector(".section").innerHTML = section2();
			document.querySelector(".nav").innerHTML = menuRedu();
			p = 2;
		}
	}else if(p == 2){
		if(document.body.clientWidth >= 680){//Se a largura do body for maior ou igual a 680...
			document.querySelector(".section").innerHTML = section1();
			document.querySelector(".nav").innerHTML = menuNo();
			p = 1;
		}
	}
	setTimeout(()=>{//Rebobinar a função
		verificar();
	}, 100);
}verificar();//Dar load na função assim que o arquivo js for carregado