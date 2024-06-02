import { Actor, Vector } from 'excalibur';
import { Resources } from "../resources.js";

export class Background extends Actor {
    constructor() {
        super();
        this.vel = new Vector(-100, 0); // Beweeg de achtergrond naar links met een snelheid van 100 pixels per seconde
    }

    onInitialize(engine) {
        this.spaceImage = Resources.Background.toSprite();
        this.spaceImage.scale = new Vector(0.80, 0.80);

        // Maak de achtergrondafbeeldingen aan
        this.background1 = new Actor({
            pos: new Vector(0, 0),
            width: this.spaceImage.width * 0.80,
            height: this.spaceImage.height * 0.80,
            anchor: new Vector(0, 0)
        });
        this.background1.graphics.use(this.spaceImage);
        this.background1.z = -1; // Zet de z-index lager dan andere actoren

        this.background2 = new Actor({
            pos: new Vector(this.spaceImage.width * 0.80, 0),
            width: this.spaceImage.width * 0.80,
            height: this.spaceImage.height * 0.80,
            anchor: new Vector(0, 0)
        });
        this.background2.graphics.use(this.spaceImage);
        this.background2.z = -1; // Zet de z-index lager dan andere actoren

        // Voeg de achtergrondafbeeldingen toe aan de scène
        engine.add(this.background1);
        engine.add(this.background2);
    }

    update(engine, delta) {
        super.update(engine, delta);

        // Verplaats de achtergrondafbeeldingen naar links
        this.background1.pos.x += this.vel.x * delta / 1000;
        this.background2.pos.x += this.vel.x * delta / 1000;

        // Als de eerste achtergrond volledig buiten het scherm aan de linkerkant is
        if (this.background1.pos.x <= -this.spaceImage.width * 0.80) {
            // Plaats de eerste achtergrond naadloos naast de tweede achtergrond
            this.background1.pos.x = this.background2.pos.x + this.spaceImage.width * 0.80;
        }

        // Als de tweede achtergrond volledig buiten het scherm aan de linkerkant is
        if (this.background2.pos.x <= -this.spaceImage.width * 0.80) {
            // Plaats de tweede achtergrond naadloos naast de eerste achtergrond
            this.background2.pos.x = this.background1.pos.x + this.spaceImage.width * 0.80;
        }
    }
}
