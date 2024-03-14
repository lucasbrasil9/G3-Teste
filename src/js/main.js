const larguraJogo = 1920; //largura do jogo.
const alturaJogo = 1280; //altura do jogo.

window.onload = function () {
    let gameConfig =
    {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            width: larguraJogo,
            height: alturaJogo,
            autoCenter: Phaser.Scale.CENTER
        },

        backgroundColor: '#000000',//fundo padrão
        scene: [TelaInicial, TelaTransicao1, Cadastro, Vision, Fase1, Fase2, flashcard1, Quiz, Puzzle, TelaFinal, MenuConfig],//fases e menus
        parent: 'game',
        dom: {
            createContainer: true
        },
    };
    game = new Phaser.Game(gameConfig);

    window.focus();
}

//função para fazer com que qualquer botão alterne entre duas texturas se o mouse estiver em cima.
function botaoHover(botao, textura1, textura2) {
    botao.on("pointerover", () => botao.setTexture(textura2));
    botao.on("pointerout", () => botao.setTexture(textura1));
}
