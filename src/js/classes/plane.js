import { Resources } from "../resources.js";
import { Actor, CollisionType, Input, Vector, Engine, Physics } from "excalibur";

export class Plane extends Actor {
    constructor() {
        super({
            width: Resources.Fish.width * 0.75,
            height: 550
        });
        this.graphics.use(Resources.Fish.toSprite());
        this.scale = new Vector(0.10, 0.10);
        this.moveSpeed = 2000; // the movement speed
    }

    onInitialize(engine) {
        this.pos = new Vector(200, 400);
        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = true;

        // Set the gravity for the engine
        Physics.gravity = new Vector(0, 600); // Adjust the gravity as needed
    }

    onPreUpdate(engine, delta) {
        // Controleren op de bovengrens van het scherm
        if (this.pos.y < 50) {
            this.pos.y = 50;
            this.vel.y = 0; // Stop upward velocity
        }

        // Controleren op de ondergrens van het scherm
        if (this.pos.y + this.height > engine.drawHeight) {
            this.pos.y = engine.drawHeight - this.height;
            this.vel.y = 0; // Stop downward velocity
        }

        // Verwerk toetsenbordinvoer
        const input = engine.input.keyboard;
        if (input.isHeld(Input.Keys.Up)) {
            this.vel.y = -350; // Move up with greater force to counteract gravity
        } else if (input.isHeld(Input.Keys.Down)) {
            this.vel.y = 200; // Move down
        } else {
            this.vel.y = 0; // Reset velocity when no key is pressed
        }
    }

    onPostUpdate(engine, delta) {
        // Additional post-update logic if necessary
    }

    update(engine, delta) {
        super.update(engine, delta);
    }
}
