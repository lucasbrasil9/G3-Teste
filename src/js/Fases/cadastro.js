class Cadastro extends Phaser.Scene {//construção de uma nova cena.

    constructor() {
        super({
            key: 'cadastro',
        });
    }

    preload() {
        //carregamento das imagens e sprites que serão utilizadas no jogo.
        this.load.image('bg_cadastro', 'assets/telaCadastro.png')
        this.load.html("form", "form/form.html");
        this.load.image("play", "assets/jogar.png");
        //this.load.image('telainicial', 'assets/telainicial.png');
        this.load.image('sala2.2', 'assets/sala2.2.png');
        this.load.image('flashcardV1', 'assets/flashcardV1.png');
        this.load.image('flash_card', 'assets/flashCard.png');
        this.load.spritesheet('slide', 'assets/fase2/cadastro-oracle.png', { frameWidth: 730, frameHeight: 590 });
        this.load.image('btn', 'assets/fase2/arrowNext.png');
        this.load.image('btn-back', 'assets/fase2/arrowBack.png');
        //this.load.image('bg_servidor', 'assets/bg_servidor.png');
        //this.load.image('serverBT', 'assets/molde_servidor.png');
        this.load.image('vision1.0', 'assets/vision1.0.png');
        //this.load.image('invisible_server', 'assets/invisible-server.png');
    }

    create() {

        this.add.image( larguraJogo / 2, alturaJogo / 2, 'bg_cadastro').setDepth(0);//background
        this.add.image(200, 250, 'vision1.0').setDepth(0).setScale(0.56);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);//enter para enviar o input da caixa de texto.
        this.nomeInserido = false;//variável que contém a informação se um nome foi inserido.

        var text = { height: 45, padding: 15, content: '' }//ainda vamos decidir se usaremos o texto por aqui ou pelo Phaser.
        this.message = this.add.text(
            this.game.config.width / 2,
            this.game.config.height / 2 - text.padding * 2 - text.height,//posição do texto.
            text.content, {
            color: "#dbdbdc",//cor.
            fontSize: 40,//tamanho da letra.
            fontStyle: "bold"//fonte.
        }
        ).setOrigin(0.5);

        var inputSize = { width: 270, height: -300, padding: 15 };//posição/tamanho da barra de nome.
        var inputButton = { width: 20, height: 3 };
        var inputCoords = {
            xposition: (this.game.config.width - inputSize.width) / 3 - inputButton.width,
            yposition: (this.game.config.height - inputSize.height - inputSize.padding * 2) / 2,
        };
        this.inputName = this.add.dom(inputCoords.xposition, inputCoords.yposition).createFromCache('form').setOrigin(0, 0);

        //criar a caixa de diálogo.
        var dialogBox = this.add.graphics();
        dialogBox.fillStyle(0x000000, 0.8);
        dialogBox.fillRect(larguraJogo / 5, alturaJogo / 12.7, 1000, 288);

        //texto da caixa de diálogo.
        var dialogText = this.add.text(400, 110, '', {
            fontFamily: 'Arial',
            fontSize: '43px',
            fill: '#ffffff',
            wordWrap: { width: 960 }
        });

        //texto a ser exibido gradualmente.
        var fullText = "Olá! Que bom que você veio! Eu sou a Vision, serei sua assistente virtual! Irei te guiar durante suas aventuras no site da Oracle Academy, mas antes preciso te conhecer melhor… como eu posso te chamar?"

        var currentText = '';
        var index = 0;
        var speed = 50; //velocidade de digitação em milissegundos.

        //função para animar o texto sendo digitado.
        this.time.addEvent({
            callback: function () {
                if (index < fullText.length) {
                    currentText += fullText[index];
                    dialogText.setText(currentText);
                    index++;
                }
            },
            callbackScope: this,
            loop: true,
            delay: speed
        });


        const nameOkTextButton = this.add.text(
            inputCoords.xposition + inputSize.width + 300,
            inputCoords.yposition + inputButton.height + 12.25, ">", {
            backgroundColor: "#1815B7",
            fontSize: 20,
            padding: 14
        }
        );
        nameOkTextButton.setInteractive();

        this.returnKey.on("down", event => {
            this.checarNome(this.inputName);//invoca a função checarNome com a tecla Enter e ela decide o que ocorre.
        });

        nameOkTextButton.on('pointerdown', () => {
            this.checarNome(this.inputName);//invoca a função checarNome com click e ela decide o que ocorre.
        });

        //imagem do botão de start, inicialmente escondida.
        this.botaoFase1 = this.add.image(345, 290, 'start-button').setOrigin(0, 0).setInteractive().setVisible(false);

        //botão pressionado redireciona o jogador para próxima cena(fase1).
        this.botaoFase1.on('pointerdown', function () {
            if (this.nomeInserido) {
                this.scene.start('fase1', this.game);
            }
        }, this);
    }

    checarNome(inputNameElement) {
        let name = inputNameElement.getChildByName("name");
        if (name.value != "") {//caso nome seja digitado avançar a página.
            this.message.setText("Olá " + name.value + "!");//mensagem a ser mostrada contendo o nome do jogador.
        }
    }
}