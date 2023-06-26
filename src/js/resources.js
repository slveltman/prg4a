import { ImageSource, Loader } from 'excalibur';
import fishImage from '../images/fish.png';
import backgroundImage from '../images/background1.png';
import cactusImage from "../images/cactus.png";

const Resources = {
    Fish: new ImageSource(fishImage),
    Background: new ImageSource(backgroundImage),
    Cactus: new ImageSource(cactusImage)
};

const ResourceLoader = new Loader(
    [Resources.Fish,
    Resources.Background,
    Resources.Cactus
]);


export { Resources, ResourceLoader };
