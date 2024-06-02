import { Resources } from "../resources.js";
import { Actor, CollisionType, Vector } from "excalibur";
import { Plane } from "./plane.js";
import {Score} from "./score.js";

export class Bird extends Actor {
    constructor(gameInstance) {
        const posY = Math.random() * 690;
        super({
            width: Resources.bird.width * 0.8,
            height: Resources.bird.height * 0.8,
            pos: new Vector(1500, posY)
        });
        this.graphics.use(Resources.bird.toSprite());
        this.scale = new Vector(0.15, 0.15);
        this.gameInstance = gameInstance;
        this.passed = false;
    }

    onInitialize(engine) {
        this.on('precollision', (event) => this.onPreCollision(event));
        this.vel = new Vector(Math.random() * -75 - 500, 0);
        this.body.collisionType = CollisionType.Passive;
        this.body.useGravity = false;
    }

    onPreCollision(event) {
        if (event.other instanceof Plane) {
            console.log('Game over');
            // const currentScore = this.gameInstance.score.getScore();
            // this.gameInstance.goToScene('endscreen', { score: currentScore });
            this.scene.engine.goToScene("endscreen", { score: this.scene.scoreObject.score })
        }
    }

    update(engine, delta) {
        super.update(engine, delta);

        if (!this.passed && this.pos.x < 200) {
            this.passed = true;
            this.scene.scoreObject.increment();
        }

        if (this.pos.x < -this.width) {
            this.kill();
        }
    }
}
