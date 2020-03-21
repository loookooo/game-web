import { Scene, Math } from 'phaser'

export default class PlayScene extends Scene {
    constructor() {
        super({ key: 'PlayScene' })
    }

    create() {
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
        //玩家
        this.player = this.physics.add.sprite(50, 500, 'dude');
        this.player.body.setGravityY(300); //玩家重力
        this.player.setBounce(0.2); //玩家弹性
        this.player.setCollideWorldBounds(true); //不许超出游戏边界
        this.physics.add.collider(this.player, this.platfroms); //玩家和地板碰撞        
        //添加动画
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        //星星
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 14,
            setXY: { x: 30, y: 0, stepX: 70 }
        });
        this.stars.children.iterate((child) => {
            child.setBounceY(Math.FloatBetween(0.6, 1));
            child.setCollideWorldBounds(true);
        });
        this.physics.add.collider(this.stars, this.platfroms);
        this.physics.add.overlap(this.player, this.stars, collectStar, null, this); //检测玩家和星星是否重叠
        this.sound.add('thud')

        function collectStar(player, star) {
            this.score += 10;
            this.scoreText.setText('得分:' + this.score);
            star.disableBody(true, true); //星星消失
            var bomb = this.bombs.create(400, 100, 'bomb'); //出现铁球
            bomb.setCollideWorldBounds(true); //不能超出边界
            bomb.setBounce(1); //铁球弹性
            bomb.setVelocity(Math.FloatBetween(-2, 2) * 100, 10); //固定速度 xy
        }

        this.bombs = this.physics.add.group();
        this.physics.add.collider(this.bombs, this.platfroms);
        this.physics.add.collider(this.player, this.bombs, hitBomb, null, this);

        function hitBomb(player, bomb) {
            this.physics.pause();
            this.player.setTint(0xff0000);
            this.player.anims.play('turn');
            this.gameOver = true;
        }

        //键盘事件
        this.cursors = this.input.keyboard.createCursorKeys();

        //计分
        this.score = 0;
        this.scoreText = this.add.text(16, 20, '得分:0', { fontSize: '32px', fill: '#000' });

        //铁球
        // const bomb = this.physics.add.image(400, 300, 'bomb')
        // bomb.setCollideWorldBounds(true) //不能超出边界
        // bomb.body.onWorldBounds = true // 启用世界边界碰撞事件
        // bomb.setBounce(1); //铁球弹性
        // bomb.setVelocity(200, 20); //固定速度 xy

        // //添加铁球碰撞声
        // this.sound.add('thud')
        // this.physics.add.collider(bomb, this.platfroms, () => {
        //     this.sound.play('thud', { volume: 0.75 })
        // });
        // //世界边界碰撞事件
        // this.physics.world.on('worldbounds', () => {
        //     this.sound.play('thud', { volume: 0.75 })
        // })
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-580);
        }
    }
}