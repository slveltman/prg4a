import {Color, Font, FontUnit, Input, Label, Scene, Vector as textAlign, Vector} from "excalibur";
import { Game } from "./game.js";
import {Background} from "./classes/background.js";

export class Startscreen extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {

        const Game1 = new Game();
        engine.addScene("Game", Game1);

        const startMessage = new Label({
            text: "PRESS SPACE TO CONTINUE",
            pos: new Vector(innerWidth/2, innerHeight - 200),
            font: new Font({
                family: 'impact',
                color: Color.Red,
                size: 50,
                unit: FontUnit.Px
            })
        })

        startMessage.pos.x = innerWidth/2 - startMessage.getTextWidth()*2

        // Event listener for start button click
        settings.on("pointerup", () => {
            //Go to settings scene
        });

        // Add the label actor to the scene
        const menuBackground = new Background('Background', 50)
        this.add(menuBackground)
        this.add(startMessage)
    }

    onPostUpdate(engine, delta) {
        if(engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            engine.goToScene("Game");
        }
    }
}
