import { ImageSource, Loader } from 'excalibur';
import fishImage from '../images/plane.png';
import backgroundImage from '../images/background.png';
import birdImage from "../images/img.png";
import * as ImageWrapping from "excalibur";

const Resources = {
    Fish: new ImageSource(fishImage),
    Background: new ImageSource(backgroundImage, { wrapping: ImageWrapping.Repeat}),
    bird: new ImageSource(birdImage),
};

const ResourceLoader = new Loader(
    [Resources.Fish,
    Resources.Background,
    Resources.bird,
]);


export { Resources, ResourceLoader };
