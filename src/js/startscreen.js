import {Scene, Label, Vector, Input, Font, FontUnit} from "excalibur";

export class StartScreen extends Scene {
    constructor() {
        super();
        this.startLabel = new Label({
            text: "Press SPACE to Start " +
                "en ontwijk de vogels",
            pos: new Vector(200, 200),
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            }),
        });

    }

    onInitialize(engine) {
        this.add(this.startLabel);

        // Listen for the spacebar to start the game
        engine.input.keyboard.on('press', (evt) => {
            if (evt.key === Input.Keys.Space) {
                engine.goToScene('gamescreen');
            }
        });
    }
}
