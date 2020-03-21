import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'
import platform from '@/game/assets/platform.png';
import dude from '@/game/assets/dude.png';
import star from '@/game/assets/star.png';
import startbutton from '@/game/assets/startbutton.png';

export function boot(game) {
    console.log(game);
}

// export default class BootScene extends Scene {
//     constructor() {
//         super({ key: 'BootScene' })
//     }

//     preload() {
//         this.loadText = this.add.text(16, 16, "加载...0%", { fontSize: "32px", fill: "#fff" })
//         this.load.on('progress', (value) => {
//             console.log(value);
//             this.loadText.text = '加载...' + parseInt(value * 100) + '%';
//         });
//         this.load.image('sky', sky); //背景
//         this.load.image('ground', platform); //地板
//         this.load.image('bomb', bomb) //铁球
//         this.load.audio('thud', [thudMp3, thudOgg]) //铁球碰撞声音
//         this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 }); //玩家
//         this.load.image('star', star); //星星
//         this.load.spritesheet('startbutton', startbutton, { frameWidth: 100, frameHeight: 40, startFrame: 1, endFrame: , spacing: 100 }); //开始按钮
//     }

//     create() {
//         this.scene.start('StartScene');
//     }
// }