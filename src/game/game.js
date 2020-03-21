import Phaser from 'phaser'
import BootScene from './scenes/BootScene';
import StartScene from './scenes/StartScene';
import PlayScene from './scenes/PlayScene';


function launch(id) {
    return new Phaser.Game(240, 400, Phaser.AUTO, id, {

    });
    // return new Phaser.Game({
    //     type: Phaser.AUTO,
    //     width: 1043,
    //     height: 564,
    //     parent: id,
    //     physics: {
    //         default: 'arcade',
    //         arcade: {
    //             gravity: { y: 600 },
    //             debug: false
    //         }
    //     },
    //     scene: [BootScene, StartScene, PlayScene]
    // })
}

export default launch
export { launch }