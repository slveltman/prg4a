import { Actor, Random, Timer } from "excalibur";
import { Cactus } from "./cactus.js";

export class Spawner extends Actor {
    constructor() {
        super();
        this.random = new Random(5555);
    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: this.getRandomInterval(),
            repeats: true
        });
        engine.currentScene.add(this.timer);
        this.timer.start();
    }
 ramdomFloat(min, max) {
        return Math.random() *(max - min) + min;
}
    spawn(engine) {
        console.log("spawn");

        for (let i = 0; i < 3; i++) {
            const cactus = new Cactus(this.ramdomFloat(50, 750));
            engine.currentScene.add(cactus);
        }

        this.timer.interval = this.getRandomInterval();
    }

    getRandomInterval() {
        return this.random.integer(4000, 8000);
    }
}
