class Fase1 extends Phaser.Scene {
    invisibleServer;

    constructor() {
        super("fase1");

    }

    preload() {
        this.load.image('bg_servidor1', 'assets/saladoservidor.png');
        this.load.image('serverseparado', 'assets/serverseparado.png');
        this.load.image('invisible-server', 'assets/Invisivel.png')
    }

    create() {
        //cria os elementos do jogo.
        this.add.image(larguraJogo/2, alturaJogo/2, 'bg_servidor1').setDepth(0);
        this.invisibleServer = this.add.image(770, 620, 'invisible-server').setScale(1.6);
        this.invisibleServer.setInteractive();
        this.invisibleServer.on('pointerdown', () => this.scene.start("fase2"));

        //criar a caixa de diálogo.
        var dialogBox = this.add.graphics().setDepth(1);
        dialogBox.fillStyle(0x000000, 0.8);
        dialogBox.fillRect(larguraJogo / 5, 65, 1500, 220);

        botaoHover(this.invisibleServer, 'invisible-server', 'serverseparado');
        
        this.add.image(200, 210, 'vision1').setDepth(0).setScale(2);

        this.mouse = this.add.image(480, 240, 'mouse').setScale(0.04).setOrigin(0.15, 0.04);
        this.input.setDefaultCursor('none');

        var dialogText = this.add.text(400, 80, '', {
            fontFamily: 'Arial',
            fontSize: '35px',
            fill: '#ffffff',
            wordWrap: { width: 1490 }
        });

        //texto a ser exibido gradualmente.
        const fullText = "Aqui ficam os nossos servidores da Oracle Academy. Em cada parte deste servidor você terá acesso à informações importantes para sua jornada na Oracle Academy, Então... que tal explorarmos um pouco? Antes de começar , não se esqueça de prestar atenção, pois em algum momento você terá que provar seus conhecimentos. Vamos lá! Que tal tentarmos clicar aqui?"
        var currentText = '';
        var index = 0;
        var speed = 50; //velocidade de digitação em milissegundos.

        //função para animar o texto sendo digitado.
        this.time.addEvent({
            callback: function () {
                if (index < fullText.length) {
                    currentText += fullText[index];
                    dialogText.setText(currentText).setDepth(5);
                    index++;
                }
            },
            callbackScope: this,
            loop: true,
            delay: speed
        });
    }

    update() {
        //configuração do cursor personalizado.
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;

    }
    
}
