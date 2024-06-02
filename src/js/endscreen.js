import { Font, FontUnit, Label, Scene, Vector, Color, Actor, Input } from "excalibur";

export class EndScreen extends Scene {
    onInitialize(engine) {
        // This will be called only once when the scene is initialized
    }

    onActivate(ctx) {
        console.log(ctx.data)
        const score = ctx.data ? ctx.data.score : 0;

        const gameOverLabel = new Label({
            text: 'Game Over',
            pos: new Vector(300, 250),
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        });

        const scoreLabel = new Label({
            text: `Score: ${score}`,
            pos: new Vector(300, 350),
            font: new Font({
                family: 'Arial',
                size: 30,
                unit: FontUnit.Px
            })
        });



        this.add(gameOverLabel);
        this.add(scoreLabel);


    }

}
