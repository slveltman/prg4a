import '../css/style.css';
import { Engine } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Plane } from "./classes/plane.js";
import { Background } from "./classes/background.js";
import { Bird } from "./classes/bird.js";
import { Spawner } from "./classes/spawner.js";
import { Score } from "./classes/score.js";
import { EndScreen } from "./endscreen.js";
import {GameScreen} from "./gamescreen.js";
import {StartScreen} from "./startscreen.js";

export class Game extends Engine {


    constructor() {
        super({ width: 1500, height: 700 });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {

        const endScreen = new EndScreen(); // Initialize the EndScreen
        const gameScreen = new GameScreen()
        const Startscreen = new StartScreen()

        // Add scenes
        this.addScene('endscreen', endScreen);
        this.addScene('gamescreen', gameScreen);
        this.addScene('startscreen', Startscreen);



        // Start the game scene (uncomment this to start the game immediately)
        this.goToScene('startscreen')
    }
}

new Game();
