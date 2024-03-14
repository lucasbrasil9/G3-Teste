// declaração das variáveis
var backButton;
var nomeText;
var nomeText2;

// criação da classe MenuConfig para a cena do menu de configuração
class MenuConfig extends Phaser.Scene {
    constructor() {
        super("menuConfig");
    }

    // criação dos elementos da cena
    create() {
        // imagem de fundo
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'fundo').setScale(1).setDepth(0);

        // troca do cursor do mouse
        this.mouse = this.add.image(480, 240, 'mouse').setScale(0.04).setOrigin(0.15, 0.04).setDepth(10);
        this.input.setDefaultCursor('none');

        // botão voltar (PLACEHOLDER)
        backButton = this.add.image(1500, 900, 'config-button').setScale(0.6).setDepth(8);
        backButton.setInteractive();
        backButton.on('pointerdown', () => this.scene.start("TelaInicial"));
        botaoHover(backButton, 'config-button', 'config-button-2');

        // imagem de configuração
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'cardConfig').setScale(2).setDepth(0);

        // dentro da configuração
        this.logo = this.add.image(550, 350, 'logo').setScale(0.6).setDepth(3); // imagem do logo do grupo

        // nome do grupo e integrantes
        nomeText = this.add.text(750, 426, 'Tri-DataBase', { fontFamily: 'Times New Roman', fontSize: '32px', fill: '#000' }).setScale(3);
        nomeText2 = this.add.text(800, 480, 'Eduardo', { fontFamily: 'Times New Roman', fontSize: '20px', fill: '#000' }).setScale(3);
        nomeText2 = this.add.text(800, 490, 'João Victor', { fontFamily: 'Times New Roman', fontSize: '20px', fill: '#000' }).setScale(3);
        nomeText2 = this.add.text(800, 514, 'Lucas Brasil', { fontFamily: 'Times New Roman', fontSize: '20px', fill: '#000' }).setScale(3);
        nomeText2 = this.add.text(800, 538, 'Lucas Tort', { fontFamily: 'Times New Roman', fontSize: '20px', fill: '#000' }).setScale(3);
        nomeText2 = this.add.text(800, 562, 'Mariella', { fontFamily: 'Times New Roman', fontSize: '20px', fill: '#000' }).setScale(3);
        nomeText2 = this.add.text(800, 586, 'Nicolas', { fontFamily: 'Times New Roman', fontSize: '20px', fill: '#000' }).setScale(3);
        nomeText2 = this.add.text(800, 610, 'Rafaela', { fontFamily: 'Times New Roman', fontSize: '20px', fill: '#000' }).setScale(3);
    }

    // atualização da cena
    update() {
        // atualização da posição do cursor personalizado
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;
    }
}
