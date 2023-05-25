ph = 1; //Etapas de verificação

/*
const linkList = [
	document.querySelectorAll(".link")[0].getAttribute("href"),
	document.querySelectorAll(".link")[1].getAttribute("href"),
	document.querySelectorAll(".link")[2].getAttribute("href"),
	document.querySelectorAll(".link")[3].getAttribute("href"),
	document.querySelectorAll(".link")[4].getAttribute("href")
];
*/

const linkList = [];

for(c=0; c < document.querySelectorAll(".link").length; c++){
	linkList.push(document.querySelectorAll(".link")[c].getAttribute("href"));
}

const menuNo = () => `
	<ul>
		<li><a rel="prev" href="${linkList[0]}" target="_self">Home</a></li>
		<li><a rel="next" href="${linkList[1]}" target="_self">Sobre</a></li>
		<li><a rel="next" href="${linkList[2]}" target="_self">Portfólio</a></li>
		<li><a rel="next" href="${linkList[3]}" target="_self">Serviços</a></li>
		<li><a rel="next" href="${linkList[4]}" target="_self">Contato</a></li>
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
	<div class="menu-ham" style="position: relative; margin-top: 10px;" onclick="menu(2)">
		<div class="line" style="transform: rotate(320deg); left: 1px; position: absolute; top: 20px;"></div>
		<div class="line" style="transform: rotate(-320deg); position: absolute; top: 20px;"></div>
	</div>
`

const menuLi = () => `
	<ul class="menu-coluna">
		<li><a rel="prev" href="${linkList[0]}" target="_self">Home</a></li>
		<li><a rel="next" href="${linkList[1]}" target="_self">Sobre</a></li>
		<li><a rel="next" href="${linkList[2]}" target="_self">Portfólio</a></li>
		<li><a rel="next" href="${linkList[3]}" target="_self">Serviços</a></li>
		<li><a rel="next" href="${linkList[4]}" target="_self">Contato</a></li>
	</ul>
`

function menu(valor){//Verificar se o menu deve estar aberto ou fechado
	if(valor == 1){
		document.querySelector(".nav").innerHTML = menuX();
		document.body.innerHTML += menuLi();
	}else if(valor == 2){
		document.querySelector(".nav").innerHTML = menuRedu();
		document.querySelector(".menu-coluna").remove();
	}
}

function verificarH(){//Sistema que verifica a largura do body
	if(ph == 1){//Se p(parte, etapa) for igual a 1, fazer verificação 1
		if(document.body.clientWidth <= 680){//Se a largura do body for menor ou igual a 680...
			document.querySelector(".nav").innerHTML = menuRedu();
			ph = 2;
		}
	}else if(ph == 2){
		if(document.body.clientWidth >= 680){//Se a largura do body for maior ou igual a 680...
			document.querySelector(".nav").innerHTML = menuNo();
			if(document.querySelector(".menu-coluna")){
				document.querySelector(".menu-coluna").remove();
			}
			ph = 1;
		}
	}
	setTimeout(()=>{//Rebobinar a função
		verificarH();
	}, 100);
}verificarH();//Dar load na função assim que o arquivo js for carregado