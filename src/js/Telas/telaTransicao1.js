class TelaTransicao1 extends Phaser.Scene {

    constructor() {
        super("telaTransicao1");
    }

    create() {
        //definição do tempo em que cada cena irá aprecer após o usuario clicar no oculos.
        this.time.addEvent({ delay: 2200, callback: this.onEvent, callbackScope: this });
        this.time.addEvent({ delay: 3000, callback: this.onEvent1, callbackScope: this });
        this.time.addEvent({ delay: 4000, callback: this.onEvent2, callbackScope: this });
        this.time.addEvent({ delay: 5000, callback: this.onEvent3, callbackScope: this });

        //modificação mouse
        this.mouse = this.add.image(480,240,'mouse').setScale(0.04).setOrigin(0.15,0.04).setDepth(3);
        this.input.setDefaultCursor('none');
    }
    //funções para usar no .addEvent para fazer a animação do oculos (após o usuario clicar no oculos).
    onEvent() {
        this.add.image(200, 150, 'sala2').setScale(0.27).setDepth(0);
    }
    onEvent1() {
        this.add.image(600, 300, 'sala3').setScale(0.34).setDepth(0);
    }
    onEvent2() {
        this.add.image(200, 450, 'sala4').setScale(0.27).setDepth(0);
    }
    onEvent3() {
        this.scene.start("vision");
    }

    update() {
        //modificação mouse 
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;
    }
}