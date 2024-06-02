import {Actor, Label, Vector, Color, Font, FontUnit} from "excalibur";

export class Score extends Actor {
    score
    constructor() {
        super();
        this.score = 0;
        this.scoreLabel = new Label({
            text: "Score: 0",
            pos: new Vector(50, 50),
            font: new Font({
                family: 'Arial',
                size: 30,
                unit: FontUnit.Px
            }),
            color: Color.Black
        });
    }

    onInitialize(engine) {
        engine.add(this.scoreLabel);
    }

    increment() {
        this.score++;
        this.scoreLabel.text = `Score: ${this.score}`;
    }

    getScore() {
        return this.score;
    }
}
