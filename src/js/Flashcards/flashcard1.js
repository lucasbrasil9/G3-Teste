class flashcard1 extends Phaser.Scene {
    constructor() {
        super("flashcard1");

    }

    preload() {
        this.load.image('flash_card', 'assets/flashCard.png');
    }

    create() {
        //imagem de fundo.
        //this.add.image(400, 300, 'configPH').setScale(0.25).setDepth(0);

        //cenario.
        //this.add.image(400, 300, 'cenario').setScale(1)

        this.add.image(larguraJogo / 2, alturaJogo / 2, 'flash_card');

        //imagem do botão.
        this.botaoCard = this.add.image(750, 100, "botao").setScale(0.02);
        this.botaoCard2 = this.add.image(750, 100, "botao").setScale(0.02);

        //botao2 invisivel.
        this.botaoCard2.setVisible(false);


        //indica que a imagem é interativa.
        this.botaoCard.setInteractive();


        //imagem do card.
        this.card = this.add.image(larguraJogo / 2, alturaJogo / 2, 'card');
        this.card.setVisible(false);

        //configurar o que o botão deve fazer ao ser clicado (abrir card).
        //this.botaoCard.on("pointerdown", () => this.apertouBotaoCard(), this);
        this.botaoCard.on('pointerdown', () => this.scene.start('quiz'));

        //configurar o que o botão2 deve fazer ao ser clicado (fechar card).
        //this.botaoCard2.setInteractive();
        //this.botaoCard2.on('pointerdown', () => this.scene.start('quiz'));


    }
    
    //o que fazer quando o botão de jogar é apertado.
    apertouBotaoCard() {
        //desabilitar interações com os botões.
        this.botaoCard.disableInteractive();

        //card e botao2 aparece. 
        this.card.setVisible(true);
        this.botaoCard2.setVisible(true);
    }

}







