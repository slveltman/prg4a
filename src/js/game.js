import '../css/style.css'
import {Actor, Engine, Physics, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Fish} from "./classes/fish.js"
import {Background} from "./classes/background.js";
import {DevTool} from "@excaliburjs/dev-tools";
import {Cactus} from "./classes/cactus.js";
import {Spawner} from "./classes/spawner.js"
import {GameScene} from "./classes/score.js";

export class Game extends Engine {

    constructor(engine) {
        super({ width: 1000, height: 600 })
        this.start(ResourceLoader).then(() =>
            this.startGame())
        this.engine = engine
    }

    startGame(engine) {
        const background = new Background()
        this.add(background)
        const fish = new Fish()
        this.add(fish)
        const cactus1 = new Cactus();
        this.add(cactus1)
        const spawner1 = new Spawner
        this.add(spawner1)

    }
}

new DevTool(new Game())