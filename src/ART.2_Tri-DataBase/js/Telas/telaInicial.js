//variaveis
let cloud;
let startButton;
let menuButton;
let soundButton;
let configButton;

class TelaInicial extends Phaser.Scene {

    constructor() {
        super("telaInicial");
    }

    preload() {
         //PlaceHolders
    this.load.image("btnPlay", "assets/jogar.png");
    this.load.image("medalha", "assets/medalha.png");
    this.load.image("voltarr", "assets/voltar.png");
    this.load.image("configPH", "assets/configPH.png");
    this.load.image("botao", "assets/botões/botaoCard.png");
    this.load.image("card", "assets/flashcard.gif");
    this.load.image("cenario", "assets/cenariocard.jpg");
    this.load.image("logo", "assets/logoG3.png");
    this.load.image("cardConfig", 'assets/novoConfig.png');

    //Assets
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
    this.load.image('sala2', 'assets/sala2.png');
    this.load.image('sala3', 'assets/sala3.png');
    this.load.image('sala4', 'assets/sala4.png');
    this.load.image('salaescura', 'assets/salaescura.png');
    this.load.image('visionacademy', 'assets/vision.png');
    this.load.image('construcao', 'assets/construcao.png');
    this.load.image('inicio', 'assets/inicio.png');
    this.load.image('iniciotech', 'assets/iniciotech.png');
    }

    create() {
        //Elementos do menu
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'inicio').setScale(1).setDepth(0);

        this.add.image(1755, 1230, 'voltarr').setScale(0.4).setDepth(0);

        //Botão volume
        soundButton = this.add.image(45, 235, 'volume-button-1').setScale(1.5);
        soundButton.setInteractive();

        //Botão config
        configButton = this.add.image(45, 90, 'config-button').setScale(1.5);
        configButton.setInteractive();
        configButton.on('pointerdown', () => this.scene.start("menuConfig"));


        //Botão start
        startButton = this.add.image(larguraJogo / 2, alturaJogo / 1.55, "oculosoff").setScale(1.2);
        startButton.setInteractive();
        startButton.on('pointerdown', () => this.scene.transition({
             target: 'telaTransicao1', duration: 1000 }));//1 segundo de intervalo para interagir
        
        //Botão menu
        menuButton = this.add.image(45, 170, 'menu-button').setScale(1.5);
        menuButton.setInteractive();

        //Trocar cursor
        this.mouse = this.add.image(480, 240, 'mouse').setScale(0.04).setOrigin(0.15, 0.04);
        this.input.setDefaultCursor('none');
        
        
        //Mudar cor do Botão quando mouse passar por cima
        botaoHover(startButton, 'oculosoff', 'oculoson');
        botaoHover(menuButton, 'menu-button', 'menu-button-2');
        botaoHover(configButton, 'config-button', 'config-button-2');
        botaoHover(soundButton, 'volume-button-1', 'volume-button-2.1');

        //FadeIn
        this.cameras.main.fadeIn(4000, 49, 46, 43);
    }

    update() {
        //configuração do novo cursor
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;
        }

}
