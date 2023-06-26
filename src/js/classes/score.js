import {Engine, Scene, Label, Vector, Timer} from "excalibur";

export class GameScene extends Scene {
    constructor() {
        super();
        this.score = 0;
        this.scoreLabel = new Label({
            text: "Score: 0",
            pos: new Vector(10, 10),
            fontSize: 20,
            color: "white",
        });
    }

    onInitialize(engine) {
        // Voeg de scorelabel toe aan de scene
        this.add(this.scoreLabel);

        // Start de timer om elke seconde een punt toe te voegen aan de score
        const timer = new Timer({
            interval: 1000,
            fcn: () => {
                this.score++;
                this.scoreLabel.text = `Score: ${this.score}`;
            },
            repeats: true,
        });
        engine.add(timer);
        timer.start();
    }
}