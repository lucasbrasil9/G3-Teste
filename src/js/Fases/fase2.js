//declaração da classe Fase2, que herda de Phaser.Scene.
class Fase2 extends Phaser.Scene {
    constructor() {
        super("fase2"); //chama o construtor da classe pai.
    }

    //declaração das variáveis para o carrossel e os botões de próxima, anterior e próxima cena.
    carrossel;
    btnNext;
    btnBack;
    btnNextScene;

    preload() {
        //carrega imagens e spritesheets.
        this.load.image('flash_card', 'assets/flashCard.png');
        this.load.spritesheet('slide', 'assets/fase2/cadastro-oracle.png', { frameWidth: 730, frameHeight: 590 });
        this.load.image('btn', 'assets/fase2/arrowNext.png');
        this.load.image('btn-back', 'assets/fase2/arrowBack.png');
        this.load.image('next-scene-btn', 'assets/Botão próximo.png');
    }

    create() {
        //adiciona uma imagem de fundo.
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'flash_card').setDepth(0).setScale(2);

        //Trocar cursor
        this.mouse = this.add.image(480, 240, 'mouse').setScale(0.04).setOrigin(0.15, 0.04);
        this.input.setDefaultCursor('none');

        //cria e configura o botão de próxima imagem.
        this.btnNext = this.add.image(1800, alturaJogo / 2, 'btn').setInteractive();
        this.btnNext.setScale(0.10); // ajusta a escala conforme necessário.
        this.btnNext.on('pointerdown', this.nextSlide.bind(this));

        //cria e configura o botão de voltar.
        this.btnBack = this.add.image(120, alturaJogo / 2, 'btn-back').setInteractive();
        this.btnBack.setScale(0.10); // ajusta a escala conforme necessário.
        this.btnBack.on('pointerdown', this.backButton.bind(this));

        //adiciona o carrossel ao centro da tela.
        this.carrossel = this.add.sprite(larguraJogo / 2, alturaJogo / 2, 'slide').setScale(0.7);

        //carrega a animação para o carrossel.
        let animacao = this.anims.create({
            key: 'slide',
            frames: this.anims.generateFrameNumbers('slide', { start: 0, end: 8 }),
            frameRate: 1,
            repeat: 0
        });
        this.carrossel.anims.load(animacao);


        //esconde o botão de voltar inicialmente.
        this.btnBack.setVisible(false);

        //cria e configura o botão de próxima cena.
        this.btnNextScene = this.add.image(1750, 1067, 'next-scene-btn').setInteractive();
        this.btnNextScene.setScale(0.4); // ajusta a escala conforme necessário.
        this.btnNextScene.on('pointerdown', this.nextScene.bind(this));
        this.btnNextScene.setVisible(false); // esconde o botão de próxima cena inicialmente.
    }

    update() {
        //configuração do novo cursor
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;
        }

    //avança para o próximo slide.
    nextSlide() {
        let framesCarrossel = this.carrossel.anims.currentAnim.frames;
        let index = framesCarrossel.indexOf(this.carrossel.anims.currentFrame);

        if (index === framesCarrossel.length - 1) {
            //se estiver no último slide, esconde o botão de próxima imagem e mostra o botão de próxima cena.
            this.btnNext.setVisible(false);
            this.btnNextScene.setVisible(true);
        } else {
            this.carrossel.anims.nextFrame();
            if (index === 0) {
                this.btnBack.setVisible(true); //mostra o botão de voltar.
            }
        }
    }

    //volta para o slide anterior.
    backButton() {
        let framesCarrossel = this.carrossel.anims.currentAnim.frames;
        let index = framesCarrossel.indexOf(this.carrossel.anims.currentFrame);

        if (index > 0) {
            let frame = framesCarrossel[index - 1];
            this.carrossel.anims.setCurrentFrame(frame);
            if (index === 1) {
                this.btnBack.setVisible(false); //esconde o botão de voltar.
            }
            //mostra o botão de próxima imagem ao voltar para um slide anterior.
            this.btnNext.setVisible(true);
        }
    }

    //transição para a próxima cena.
    nextScene() {
        this.scene.start("quiz");
    }
}
