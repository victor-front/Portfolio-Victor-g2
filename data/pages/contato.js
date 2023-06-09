const underfinedImg = '../img/icones/teste.png';//Para um caminho de imagem caso tal elemento não tenha uma imagem definida

const contatos = {//Objeto que contém dados para adicionar na sessão de contato
	nomes: ['Gmail', 'Instagram', 'Github'],
	clicks: ['gmail', 'instagram', 'github'],
	imgs: [underfinedImg, underfinedImg, underfinedImg]
}


//Elemento de contato abaixo. Obs: não confunda a SESSÃO contato com o ELEMENTO contato
const contatoEl = (nome, click, img) => `
	<div class="contatoEl" onclick="copy('${click}');">
		<div class="contato-click">
			<div class="contato-header">
				<h2>${nome}</h2>
			</div>
			<div class="contato-body" style="background-image: url('${underfinedImg}');">
			</div>
		</div>
	</div>
`

function add(){//Loop que adiciona o elemento na sessão de contatos
	for(c=0;c<contatos.nomes.length;c++){
		document.querySelector(".cont-body").innerHTML += contatoEl(`${contatos.nomes[c]}`, `${contatos.clicks[c]}`, `${contatos.imgs[c]}`);
	}
}add();

function copy(click){
	navigator.clipboard.writeText(click);
}