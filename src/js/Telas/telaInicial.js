//variaveis.
let cloud;
let startButton;
let menuButton;
let soundButton;
let configButton;

class TelaInicial extends Phaser.Scene {

    constructor() {
        super("TelaInicial");
    }

    preload() {
        //carregamento das imagens e sprites que serão utilizadas no jogo.
        this.load.image("btnPlay", "assets/jogar.png");
        this.load.image("medalha", "assets/medalha.png");
        this.load.image("voltar", "assets/voltar.png");
        this.load.image("configPH", "assets/configPH.png");
        this.load.image("botao", "assets/botões/botaoCard.png");
        this.load.image("card", "assets/flashcard.gif");
        this.load.image("cenario", "assets/cenariocard.jpg");
        this.load.image("logo", "assets/logoG3.png");
        this.load.image("cardConfig", 'assets/novoConfig.png');
        this.load.image('mouse', 'assets/cursor.png');
        this.load.image('start-button', 'assets/botões/start-1.png');
        this.load.image('start-button-2', 'assets/botões/start-2.png');
        this.load.image('config-button', 'assets/botões/config-1.png');
        this.load.image('config-button-2', 'assets/botões/config-2.png');
        this.load.image('menu-button', 'assets/botões/menu-1.png');
        this.load.image('menu-button-2', 'assets/botões/menu-2.png');
        this.load.image('volume-button-1', 'assets/botões/volume-1.png');
        this.load.image('volume-button-1.1', 'assets/botões/volume-1.1.png');
        this.load.image('volume-button-2', 'assets/botões/volume-2.png');
        this.load.image('volume-button-2.1', 'assets/botões/volume-2.1.png');
        this.load.image('cloud', 'assets/nuvem.png');
        this.load.image('oculosoff', 'assets/Oculos1.png');
        this.load.image('oculoson', 'assets/Oculos2.png');
        this.load.image('sala1', 'assets/sala1.png');
        this.load.image('sala2', 'assets/sala2.jpg');
        this.load.image('sala3', 'assets/sala3.jpg');
        this.load.image('sala4', 'assets/sala4.jpg');
        this.load.image('salaescura', 'assets/salaescura.png');
        this.load.image('visionacademy', 'assets/vision.png');
        this.load.image('construcao', 'assets/construcao.png');
        this.load.image('inicio', 'assets/inicio.png');
        this.load.image('iniciotech', 'assets/iniciotech.png');
        this.load.image('fundo', 'assets/telaCadastro.png');
    }

    create() {
        //background.
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'inicio').setScale(1).setDepth(0);

        //barra de progresso.
        this.add.image(1760, 1220, 'voltar').setScale(0.4).setDepth(0);

        //modificação mouse
        this.mouse = this.add.image(480,240,'mouse').setScale(0.08).setOrigin(0.15,0.04).setDepth(3);
        this.input.setDefaultCursor('none');

        //botão volume.
        soundButton = this.add.image(50, 310, 'volume-button-1').setScale(1.3);
        soundButton.setInteractive();

        //botão config.
        configButton = this.add.image(50, 120, 'config-button').setScale(1.3);
        configButton.setInteractive();
        configButton.on('pointerdown', () => this.scene.start("menuConfig"));


        //botão start.
        startButton = this.add.image(larguraJogo / 2, alturaJogo / 1.6 + 30, "oculosoff").setScale(1);
        startButton.setInteractive();
        startButton.on('pointerdown', () => this.scene.transition({
            target: 'telaTransicao1', duration: 1000
        }));//1 segundo de intervalo para interagir

        //botão menu.
        menuButton = this.add.image(50, 210, 'menu-button').setScale(1.3);
        menuButton.setInteractive();

        //mudar cor dos botões quando o mouse passar por cima.
        botaoHover(startButton, 'oculosoff', 'oculoson');
        botaoHover(menuButton, 'menu-button', 'menu-button-2');
        botaoHover(configButton, 'config-button', 'config-button-2');
        botaoHover(soundButton, 'volume-button-1', 'volume-button-2.1');

        //fade in.
        this.cameras.main.fadeIn(4000, 49, 46, 43);
    }

    update() {
        // configuração do novo cursor
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;
    }

}
