import { Actor, Random, Timer } from "excalibur";
import { Bird } from "./bird.js";

export class Spawner extends Actor {
    constructor() {
        super();
        this.random = new Random(5855);
        this.spawnInterval = 3000; // Initiële spawninterval (3 seconden)
        this.currentBirdsPerSpawn = 1; // Vogels per spawn bij start
        this.maxBirdsPerSpawn = 10; // Maximaal aantal vogels per spawn
    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: this.spawnInterval,
            repeats: true
        });
        engine.currentScene.add(this.timer);
        this.timer.start();
    }

    randomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }

    spawn(engine) {
        console.log(`spawn: ${this.currentBirdsPerSpawn}`);


        // Voeg het juiste aantal vogels toe aan de scene
        for (let i = 0; i < this.currentBirdsPerSpawn; i++) {
            const bird = new Bird(this.randomFloat(50, 750));
            engine.currentScene.add(bird);
        }

        // Verhoog het aantal vogels per spawn
        if (this.currentBirdsPerSpawn < this.maxBirdsPerSpawn) {
            this.currentBirdsPerSpawn++;
        }

    }
}
