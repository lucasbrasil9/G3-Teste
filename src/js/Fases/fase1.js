class Fase1 extends Phaser.Scene {
    invisibleServer;

    constructor() {
        super("fase1");

    }

    create() {
        //cria os elementos do jogo.
        this.add.image(400, 300, 'bg_servidor').setDepth(0);
        this.invisibleServer = this.add.image(400, 300, 'invisible_server');
        this.invisibleServer.setInteractive();
        this.invisibleServer.on('pointerdown', () => this.scene.start("fase2"));

        botaoHover(this.invisibleServer, 'invisible_server', 'serverBT');

    }
}
