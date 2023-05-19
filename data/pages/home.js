p = 1; //Etapas de verificação

const section1 = () => `
	<div class="cluna-nicktec">
		<p class="descricao">Olá! Eu sou <strong>Victor Aguiar</strong>, tenho 17 anos e amo expressar minhas artes e sentimentos por onde quer que eu passo!</p>
		<div class="secao-tecnologias">
			<img src="data/img/html5.png" class="tec-img">
			<img src="data/img/css3.png" class="tec-img">
			<img src="data/img/js.png" class="tec-img">
			<img src="data/img/git.png" class="tec-img">
			<img src="data/img/github.png" class="tec-img">
		</div>
	</div>
	<div class="nick-pfp">
		<h1 class="nome">Victor Aguiar</h1>
		<img src="data/img/pfp.jpg" class="pfp">
	</div>
`;

const section2 = () => `
	<div class="nick-pfp">
		<h1 class="nome">Victor Aguiar</h1>
		<img src="data/img/pfp.jpg" class="pfp">
	</div>
	<div class="cluna-nicktec">
		<p class="descricao">Olá! Eu sou <strong>Victor Aguiar</strong>, tenho 17 anos e amo expressar minhas artes e sentimentos por onde quer que eu passo!</p>
		<div class="secao-tecnologias">
			<img src="data/img/html5.png" class="tec-img">
			<img src="data/img/css3.png" class="tec-img">
			<img src="data/img/js.png" class="tec-img">
			<img src="data/img/git.png" class="tec-img">
			<img src="data/img/github.png" class="tec-img">
		</div>
	</div>
`;

function verificar(){//Sistema que verifica a largura do body
	if(p == 1){//Se p(parte, etapa) for igual a 1, fazer verificação 1
		if(document.body.clientWidth <= 680){//Se a largura do body for menor ou igual a 680...
			document.querySelector(".section").innerHTML = section2();
			p = 2;
		}
	}else if(p == 2){
		if(document.body.clientWidth >= 680){//Se a largura do body for maior ou igual a 680...
			document.querySelector(".section").innerHTML = section1();
			p = 1;
		}
	}
	setTimeout(()=>{//Rebobinar a função
		verificar();
	}, 100);
}verificar();//Dar load na função assim que o arquivo js for carregado

setTimeout(()=>{
	document.querySelector(".section").style.display = 'flex';
}, 100)