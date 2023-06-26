import { Resources } from "../resources.js";
import { Actor, CollisionType, Input, Vector } from "excalibur";

export class Fish extends Actor {
    constructor() {
        super({
            width: Resources.Fish.width,
            height: Resources.Fish.height,
        });
        this.graphics.use(Resources.Fish.toSprite());
        this.scale = new Vector(1, 1);
        this.moveSpeed = 2000; // the movement speed
    }

    onInitialize(engine) {
        this.pos = new Vector(200, 400);
        this.vel = new Vector(0, 0);
        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = true;
    }

    update(engine, delta) {
        super.update(engine, delta);

        // Check for arrow key inputs
        if (engine.input.keyboard.wasPressed(Input.Keys.W)) {
            this.vel.y = -this.moveSpeed;
        } else if (engine.input.keyboard.wasPressed(Input.Keys.S)) {
            this.vel.y = this.moveSpeed;
        } else {
            this.vel.y = 0;
        }
    }
}


