// criação da classe Quiz para a cena do jogo de quiz
class Quiz extends Phaser.Scene {
    // declaração das variáveis da cena
    quizButton1;
    quizButton2;
    quizButton3;
    nextBT;

    constructor() {
        super({
            key: 'quiz'
        });
    }

    // inicialização dos controles do quiz
    init() {
        // controle de estado do jogo
        this.gameControls = {
            over: false,
            score: 0,
            scoreText: '',
            resetOverBT: null,
            resetWinBT: null,
            cursors: null,
            win: false
        };
    }

    // pré-carregamento das imagens do jogo
    preload() {
        this.load.image('quizBG', 'assets/quizBG.png');
        this.load.image('server-bg', 'assets/servidorCard.jpg');
        this.load.image('quiz-button1', 'assets/botões/Gameflow1.png');
        this.load.image('quiz-button2', 'assets/botões/Gameflow2.png');
        this.load.image('quiz-button3', 'assets/botões/Gameflow3.png');
        this.load.image('gameWin', 'assets/botões/gameWinBT.png');
        this.load.image('gameOver', 'assets/botões/gameOver.png');
        this.load.image('resetBT', 'assets/botões/reset.png');
        this.load.image('nextBT', 'assets/botões/NextBT.png');
        this.load.image('resetOverBT', 'assets/botões/resetOverBT.png');
        this.load.image('resetWinBT', 'assets/botões/resetWin.png');
    }

    // criação dos elementos da cena
    create() {
        // background com a pergunta 
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'quizBG').setDepth(1);

        // server borrado
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'server-bg').setDepth(0);

        // cria os botões que contém as alternativas
        this.quizButton1 = this.add.image(950, 460, 'quiz-button1').setScale(1.4).setDepth(2);
        this.quizButton2 = this.add.image(950, 750, 'quiz-button2').setScale(1.4).setDepth(2);
        this.quizButton3 = this.add.image(950, 1050, 'quiz-button3').setScale(1.4).setDepth(2);

        // adiciona interação
        this.quizButton1.setInteractive();
        this.quizButton2.setInteractive();
        this.quizButton3.setInteractive();

        // adiciona o cursor do mouse
        this.mouse = this.add.image(larguraJogo / 2 + 80, alturaJogo / 3 + 40, 'mouse').setScale(0.08).setOrigin(0.15, 0.04).setDepth(5);
        this.input.setDefaultCursor('none');

        //adiciona o placar e botão de reset
        this.gameControls.scoreText = this.add.text(larguraJogo / 50, alturaJogo / 50, 'Pontuação: 0', { fontSize: '32px', fill: '#fff' });
        this.gameControls.resetOverBT = this.add.image(larguraJogo / 2, alturaJogo / 2, 'resetOverBT').setScale(2.0).setInteractive().setVisible(false).setDepth(3);
        this.gameControls.resetWinBT = this.add.image(larguraJogo / 2, alturaJogo / 2 + 300, 'resetWinBT').setScale(1.7).setInteractive().setVisible(false).setDepth(3);

        this.gameControls.resetOverBT.on('pointerdown', function () {
            this.gameControls.over = false;
            this.gameControls.win = false;
            this.gameControls.score = 0;
            this.scene.restart();
        }, this);

        this.gameControls.resetWinBT.on('pointerdown', function () {
            this.gameControls.over = false;
            this.gameControls.win = false;
            this.gameControls.score = 0;
            this.scene.restart();
        }, this);


        // configuração dos eventos de clique nos botões do quiz
        this.quizButton1.on('pointerdown', function () {
            if (!this.gameControls.win) {
                if (!this.gameControls.over) {
                    this.gameControls.over = true;
                    this.wrongAnswer();
                }
            }
        }, this);

        this.quizButton2.on('pointerdown', function () {
            if (!this.gameControls.win) {
                if (!this.gameControls.over) {
                    this.gameControls.over = true;
                    this.wrongAnswer();
                }
            }
        }, this);

        this.quizButton3.on('pointerdown', function () {
            if (!this.gameControls.over) {
                this.gameControls.score += 100;
                this.gameControls.scoreText.setText('Pontuação: ' + this.gameControls.score);
                this.rightAnswer();
            }
        }, this);
    }

    
    // atualização da cena
    update() {
        // atualização da posição do cursor personalizado
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;
    }

    // função chamada quando a resposta está errada
    wrongAnswer() {
        this.gameControls.over = true;
        //this.add.image(larguraJogo / 2, alturaJogo / 3, 'gameOver').setScale(.05);
        this.gameControls.resetOverBT.visible = true;

    }

    // função chamada quando a resposta está correta
    rightAnswer() {
        this.gameControls.over = false;
        this.gameControls.win = true;
        //this.add.image(larguraJogo / 2, alturaJogo / 3, 'gameWin').setScale(.25);
        this.gameControls.resetWinBT.visible = true;
        this.nextBT = this.add.image(larguraJogo / 2, alturaJogo / 2, 'nextBT').setScale(2).setInteractive().setVisible(true).setDepth(3);
        this.nextBT.on('pointerdown', () => this.scene.start('puzzle'));
    }
}
