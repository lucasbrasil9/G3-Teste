//criação da cena Puzzle.
class Puzzle extends Phaser.Scene {

    turnCard1;
    turnCard2;
    turnCard3;
    turnCard4;
    turnCard5;
    turnCard6;
    turnCard7;
    turnCard8;

    constructor() {
        super({
            key: 'puzzle',
        });
    }

    init() {
        this.gameControls  = {
            cards: [],
            flippedCards: [],
            canFlip: true,
            matches: 0
        };
    }

    preload () {
        this.load.image('bg', 'assets/flashCard.png');
        this.load.image('backCard', 'assets/cardBack.png');
        this.load.image('card1', 'assets/botões/card1.png');
        this.load.image('card2', 'assets/botões/card2.png');
        this.load.image('card3', 'assets/botôes/card3.png');
        this.load.image('card4', 'assets/botôes/card1.png');
        this.load.image('card5', 'assets/botôes/card2.png');
        this.load.image('card6', 'assets/botôes/card3.png');
        this.load.spritesheet('turnCard1', 'assets/turnCard1.png', { frameWidth: 352, frameHeight: 506 });
        this.load.spritesheet('turnCard2', 'assets/turnCard2.png', { frameWidth: 695, frameHeight: 436 });
        this.load.spritesheet('turnCard3', 'assets/turnCard3.png', { frameWidth: 352, frameHeight: 506 });
        this.load.spritesheet('turnCard4', 'assets/turnCard4.png', { frameWidth: 695, frameHeight: 436 });
        this.load.spritesheet('turnCard5', 'assets/turnCard5.png', { frameWidth: 352, frameHeight: 506 });
        this.load.spritesheet('turnCard6', 'assets/turnCard6.png', { frameWidth: 695, frameHeight: 436 });
        this.load.spritesheet('turnCard7', 'assets/turnCard7.png', { frameWidth: 352, frameHeight: 506 });
        this.load.spritesheet('turnCard8', 'assets/turnCard8.png', { frameWidth: 695, frameHeight: 436 });
    }

    create() {
        //fundo
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'bg');

        this.turnCard1 = this.add.sprite(100, 150, 'turnCard1').setInteractive().setScale(0.5);
        this.turnCard2 = this.add.sprite(150, 150, 'turnCard2').setInteractive().setScale(0.5);
        this.turnCard3 = this.add.sprite(200, 150, 'turnCard3').setInteractive().setScale(0.5);
        this.turnCard4 = this.add.sprite(250, 150, 'turnCard4').setInteractive().setScale(0.5);
        this.turnCard5 = this.add.sprite(100, 350, 'turnCard5').setInteractive().setScale(0.5);
        this.turnCard6 = this.add.sprite(150, 350, 'turnCard6').setInteractive().setScale(0.5);
        this.turnCard7 = this.add.sprite(200, 350, 'turnCard7').setInteractive().setScale(0.5);
        this.turnCard8 = this.add.sprite(250, 350, 'turnCard8').setInteractive().setScale(0.5);

        //this.positions = [];
        //this.cardTypes = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];

          // adiciona o cursor do mouse
        this.mouse = this.add.image(larguraJogo / 2 + 80, alturaJogo / 3 + 40, 'mouse').setScale(0.04).setOrigin(0.15, 0.04).setDepth(3);
        this.input.setDefaultCursor('none');
        
        // adiciona evento de clique
        this.turnCard1.on('pointerdown', function() {
            if (this.gameControls.canFlip && !this.gameControls.flippedCards.includes(this)) {
                this.flipCard(this);
            }
            this.anims.create({
                key: 'turn',
                frames: this.anims.generateFrameNumbers('turnCard1', { start: 0, end: 1}),
                repeat: 0
            });
        }, this);

        this.turnCard2.on('pointerdown', function() {
            if (this.gameControls.canFlip && !this.gameControls.flippedCards.includes(this)) {
                this.flipCard(this);
            }
            this.anims.create({
                key: 'turn',
                frames: this.anims.generateFrameNumbers('turnCard2', { start: 0, end: 1}),
                repeat: 0
            });
        }, this);

        this.turnCard3.on('pointerdown', function() {
            if (this.gameControls.canFlip && !this.gameControls.flippedCards.includes(this)) {
                this.flipCard(this);
            }
            this.anims.create({
                key: 'turn',
                frames: this.anims.generateFrameNumbers('turnCard3', { start: 0, end: 1}),
                repeat: 0
            });
        }, this);

        this.turnCard4.on('pointerdown', function() {
            if (this.gameControls.canFlip && !this.gameControls.flippedCards.includes(this)) {
                this.flipCard(this);
            }
            this.anims.create({
                key: 'turn',
                frames: this.anims.generateFrameNumbers('turnCard4', { start: 0, end: 1}),
                repeat: 0
            });
        }, this);

        this.turnCard5.on('pointerdown', function() {
            if (this.gameControls.canFlip && !this.gameControls.flippedCards.includes(this)) {
                this.flipCard(this);
            }
            this.anims.create({
                key: 'turn',
                frames: this.anims.generateFrameNumbers('turnCard5', { start: 0, end: 1}),
                repeat: 0
            });
        }, this);

        this.turnCard6.on('pointerdown', function() {
            if (this.gameControls.canFlip && !this.gameControls.flippedCards.includes(this)) {
                this.flipCard(this);
            }
            this.anims.create({
                key: 'turn',
                frames: this.anims.generateFrameNumbers('turnCard6', { start: 0, end: 1}),
                repeat: 0
            });
        }, this);

        this.turnCard7.on('pointerdown', function() {
            if (this.gameControls.canFlip && !this.gameControls.flippedCards.includes(this)) {
                this.flipCard(this);
            }
            this.anims.create({
                key: 'turn',
                frames: this.anims.generateFrameNumbers('turnCard7', { start: 0, end: 1}),
                repeat: 0
            });
        }, this);

        this.turnCard8.on('pointerdown', function() {
            if (this.gameControls.canFlip && !this.gameControls.flippedCards.includes(this)) {
                this.flipCard(this);
            }
            this.anims.create({
                key: 'turn',
                frames: this.anims.generateFrameNumbers('turnCard8', { start: 0, end: 1}),
                repeat: 0
            });
        }, this);

        // distribui aleatoriamente as posições dos cartões
        /*for (var i = 0; i < 6; i++) {
            this.positions.push({ x: 100 + i * 150, y: 150 });
            this.positions.push({ x: 100 + i * 150, y: 350 });
        }
        Phaser.Utils.Array.Shuffle(this.positions);*/

        // cria os cartões
        /*for (var i = 0; i < 12; i++) {
            let card = this.add.sprite(this.positions[i].x, this.positions[i].y, 'backCard').setInteractive().setScale(0.01);
            card.value = this.cardTypes[i % 6];
            card.visible = false;
            this.gameControls.cards.push(card);

            

        }*/

        // inicia o jogo
        setTimeout(() => {
            this.gameControls.cards.forEach(card => {
                card.visible = true;
            });
        }, 1000);
    }

      // atualização da cena
      update() {
        // atualização da posição do cursor personalizado
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;
    }

    flipCard(card) {
        card.setTexture(card.value);
        this.gameControls.flippedCards.push(card);

        if (this.gameControls.flippedCards.length === 2) {
            this.gameControls.canFlip = false;
            this.checkMatch();
        }

        this.turnCard1.anims.play('turn', true);
        this.turnCard2.anims.play('turn', true);
        this.turnCard3.anims.play('turn', true);
        this.turnCard4.anims.play('turn', true);
        this.turnCard5.anims.play('turn', true);
        this.turnCard6.anims.play('turn', true);
        this.turnCard7.anims.play('turn', true);
        this.turnCard8.anims.play('turn', true);



        //this.add.image(100, 150, 'card1');
        //this.add.image(150, 150, 'card2');
        //this.add.image(200, 150, 'card3');
    }

    checkMatch() {
        if (this.gameControls.flippedCards[0].value === this.gameControls.flippedCards[1].value) {
            this.gameControls.matches++;
            if (this.gameControls.matches === 4) {
                setTimeout(() => {
                    alert('Parabéns, você venceu!');
                    this.resetGame();
                }, 500);
            } else {
                setTimeout(() => {
                    this.gameControls.flippedCards.forEach(card => {
                        card.visible = false;
                    });
                    this.gameControls.flippedCards = [];
                    this.gameControls.canFlip = true;
                }, 500);
            }
        } else {
            setTimeout(() => {
                this.gameControls.flippedCards.forEach(card => {
                    card.setTexture('backCard');
                });
                this.gameControls.flippedCards = [];
                this.gameControls.canFlip = true;
            }, 500);
        }
    }

    resetGame() {
        this.gameControls.cards.forEach(card => {
            card.visible = false;
            card.setTexture('backCard');
        });
        this.gameControls.matches = 0;
        this.gameControls.canFlip = true;
        this.gameControls.flippedCards = [];
    }
}


    //carregamento das imagens dos flash cards.
    /*preload() {
        this.load.image('flash_card0', 'assets/flashCard.png');
        this.load.image('flash_card1', 'assets/flashCard.png');
    }

    //criação dos elementos da cena.
    create() {
        const x = 100;
        let y = 100;

        //criação do loop dos cards.
        let images = ["flash_card0", "flash_card1"];

        const frames = this.texture.get('images').getFrameNames();

        for (let i = 0; i < images.length; i++) {
            //adição dos cards na tela de forma interativa.
            this.add.image(images[i], x, y, Phaser.Math.RND.pick(frames)).setInteractive();

            y += 6;
        }

        //criação da drop zone.
        const zone = this.add.zone(500, 300, 300, 300).setRectangleDropZone(300, 300);

        //exibição visual da drop zone.
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height);
    }

    update() {
        //atualização da cena.
    }*/
