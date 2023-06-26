import { Resources } from "../resources.js";
import { Actor, CollisionType, Vector } from "excalibur";
import { Fish } from "./fish.js";
import { EndScreen } from "../endscreen.js";

export class Cactus extends Actor {
    constructor(posY, gameInstance) {
        super({
            width: Resources.Cactus.width,
            height: Resources.Cactus.height,
            pos: new Vector(900, posY)
        });
        this.graphics.use(Resources.Cactus.toSprite());
        this.scale = new Vector(0.05, 0.05);
        this.gameInstance = gameInstance;
    }

    onInitialize(engine) {
        this.on('precollision', (event) => this.onPreCollision(event));
        this.vel = new Vector(-250, 0);
        this.body.collisionType = CollisionType.Passive;
        this.body.useGravity = false;
    }

    onPreCollision(event) {
        if (event.other instanceof Fish) {
            console.log('Game over');
            const endScreen = new EndScreen();
            this.gameInstance.add('Gameover', endScreen);
            this.gameInstance.goToScene('Gameover');
        }
    }
}

