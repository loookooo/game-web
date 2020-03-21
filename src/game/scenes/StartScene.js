import { Scene } from 'phaser'

export default class StartScene extends Scene {
    constructor() {
        super({ key: 'StartScene' })
    }

    preload() {
        //背景
        this.add.image(521, 282, 'sky');
        //地板
        this.platfroms = this.physics.add.staticGroup();
        this.platfroms.create(521, 556, 'ground').setScale(11, 1).refreshBody();
        this.platfroms.create(100, 400, 'ground').setScale(2, 1).refreshBody();
        this.platfroms.create(943, 400, 'ground').setScale(2, 1).refreshBody();
        this.platfroms.create(200, 300, 'ground');
        this.platfroms.create(643, 450, 'ground').setScale(2, 1).refreshBody();
        this.platfroms.create(543, 250, 'ground').setScale(2, 1).refreshBody();
        //添加开始按钮
        this.add.image(70, 200, 'startbutton', { frameWidth: 32, frameHeight: 48 });
    }
    onStartClick() {

    }
    create() {
        //this.scene.start('PlayScene');
    }
}