//Objetivo 1 - Selecionar personagens

//Passo 1: Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

//Passo 2: adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth <450){
            window.scrollTo({top: 0, behavior: 'smooth' });
        }

         //Passo 3: verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado'); 

        //Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar imagem, o nome e a descrição

        //Passo 1: pegar elementos do personagem grande pra adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        //Passo 3: alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        //Passo 4: alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);

    });
});


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    //Passo 2: alterar imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

