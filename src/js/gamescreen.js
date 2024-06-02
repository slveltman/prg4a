import { Scene } from "excalibur";
import { Plane } from "./classes/plane.js";
import { Background } from "./classes/background.js";
import { Bird } from "./classes/bird.js";
import { Spawner } from "./classes/spawner.js";
import { Score } from "./classes/score.js";

export class GameScreen extends Scene {
    constructor() {
        super();
    }

    scoreObject;
    onInitialize(engine) {
        const background = new Background();
        const plane1 = new Plane();
        const spawner1 = new Spawner();
        this.scoreObject = new Score();
        const bird1 = new Bird()

        this.add(background);
        this.add(plane1);
        this.add(spawner1);
        this.add(this.scoreObject);
        this.add(bird1)

    }
}
