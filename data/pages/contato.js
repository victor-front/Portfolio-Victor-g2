const underfinedImg = '../img/icones/teste.png';//Para um caminho de imagem caso tal elemento não tenha uma imagem definida

const contatos = {//Objeto que contém dados para adicionar na sessão de contato
	nomes: ['Gmail', 'Instagram', 'Github'],
	clicks: [
	'victoraguiarrosa397@gmail.com', 
	'@_rozavick', 
	'victor-front'],
	imgs: [
	'../img/icones/gmail.png', 
	'../img/icones/instagram.png', 
	'../img/icones/github.png'],
	positionsY: ['25%', '10%', '20%'],
	sizes: ['55%', '65%', '50%']
}


//Elemento de contato abaixo. Obs: não confunda a SESSÃO contato com o ELEMENTO contato
const contatoEl = (nome, click, img, positionY, size) => `
	<div class="contatoEl" onclick="copy('${click}', '${nome}');">
		<div class="contato-click">
			<div class="contato-header">
				<h2>${nome}</h2>
			</div>
			<div class="contato-body" style="background-image: url('${img}'); background-position: 50% ${positionY}; background-size: ${size};">
			</div>
		</div>
	</div>
`

function add(){//Loop que adiciona o elemento na sessão de contatos
	for(c=0;c<contatos.nomes.length;c++){
		document.querySelector(".cont-body").innerHTML += contatoEl(`${contatos.nomes[c]}`, `${contatos.clicks[c]}`, `${contatos.imgs[c]}`, `${contatos.positionsY[c]}`, `${contatos.sizes[c]}`);
	}
}add();

function copy(click, nome){
	navigator.clipboard.writeText(click);
	document.querySelector(".aviso p").innerHTML = `Endereço do ${nome} copiado!`;
}