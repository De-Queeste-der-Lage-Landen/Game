function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const aivdLogoAnim = importAll(require.context('@/assets/images/elements/aivd/aivd-logo', false, /\.(png)$/));
const characterAivdAnim = importAll(require.context('@/assets/images/elements/aivd/character', false, /\.(png)$/));
const doorAIVDAnim = importAll(require.context('@/assets/images/elements/aivd/door', false, /\.(png)$/));
const doorAIVDInvisAnim = importAll(require.context('@/assets/images/elements/aivd/door-invisible', false, /\.(png)$/));
const cameraAnim = importAll(require.context('@/assets/images/elements/aivd/camera', false, /\.(png)$/));
const arcadeAnim = importAll(require.context('@/assets/images/elements/aivd/arcade', false, /\.(png)$/));
const catposterAnim = importAll(require.context('@/assets/images/elements/aivd/catposter', false, /\.(png)$/));
const spiderAnim = importAll(require.context('@/assets/images/elements/aivd/spider', false, /\.(png)$/));

// Images
import AivdLogo from '@/assets/images/elements/aivd/aivd-logo.png';
import AivdHouseOne from '@/assets/images/elements/aivd/aivd-house-1.png';
import AivdHouseTwo from '@/assets/images/elements/aivd/aivd-house-2.png';
import CamerasOnPoleLeft from '@/assets/images/elements/aivd/cameras-on-pole-left.png';
import CamerasOnPoleRight from '@/assets/images/elements/aivd/cameras-on-pole-right.png';
import Pole from '@/assets/images/elements/aivd/pole.png';
import AivdCharacterOne from '@/assets/images/elements/aivd/character-1.png';
import AivdCharacterTwo from '@/assets/images/elements/aivd/character-2.png';
import AivdCharacterThree from '@/assets/images/elements/aivd/character-3.png';
import BlackCar from '@/assets/images/elements/aivd/black-car.png';
import CameraLeft from '@/assets/images/elements/aivd/camera-left.png';
import CameraRight from '@/assets/images/elements/aivd/camera-right.png';
import ClockBig from '@/assets/images/elements/aivd/clock-big.png';
import EnigmaStand from '@/assets/images/elements/aivd/enigma-stand.png';
import EnigmaPlaque from '@/assets/images/elements/aivd/enigma-plaque.png';
import Paintings from '@/assets/images/elements/aivd/paintings-2.png';
import Painting from '@/assets/images/elements/aivd/painting.png';
import PaintingBackground from '@/assets/images/elements/aivd/painting-background.png';
import Plant from '@/assets/images/elements/aivd/plant-1.png';
import CouchChairs from '@/assets/images/elements/aivd/couch-chairs.png';
import TableFlowers from '@/assets/images/elements/aivd/table-flowers.png';
import VisitorPassOne from '@/assets/images/elements/aivd/visitor-pass-1.png';
import VisitorPassTwo from '@/assets/images/elements/aivd/visitor-pass-2.png';
import VisitorPassThree from '@/assets/images/elements/aivd/visitor-pass-3.png';
import VisitorPassFour from '@/assets/images/elements/aivd/visitor-pass-4.png';
import VisitorPassFive from '@/assets/images/elements/aivd/visitor-pass-5.png';
import VisitorPassSix from '@/assets/images/elements/aivd/visitor-pass-6.png';
import TechHeroPassOne from '@/assets/images/elements/aivd/tech-hero-pass-1.png';
import TechHeroPassTwo from '@/assets/images/elements/aivd/tech-hero-pass-2.png';
import TechHeroPassThree from '@/assets/images/elements/aivd/tech-hero-pass-3.png';
import TechHeroPassFour from '@/assets/images/elements/aivd/tech-hero-pass-4.png';
import TechHeroPassFive from '@/assets/images/elements/aivd/tech-hero-pass-5.png';
import TechHeroPassSix from '@/assets/images/elements/aivd/tech-hero-pass-6.png';
import BricksSmall from '@/assets/images/elements/aivd/bricks-small.png';
import BricksBig from '@/assets/images/elements/aivd/bricks-big.png';
import AivdDesk from '@/assets/images/elements/aivd/desk.png';
import Spiderweb from '@/assets/images/elements/aivd/spiderweb.png';
import SpiderwebCeiling from '@/assets/images/elements/aivd/spiderweb-ceiling.png';
import Photo from '@/assets/images/elements/aivd/photo.png';
import Trash from '@/assets/images/elements/aivd/trash.png';
import SummerschoolSign from '@/assets/images/elements/aivd/summerschool-sign.png';
import Key from '@/assets/images/elements/aivd/key.png';

export default [
	// Animations
	{ id: 'aivd-logo-animation', sprite: aivdLogoAnim },
	{ id: 'character-aivd-animation', sprite: characterAivdAnim },
	{ id: 'door-aivd-animation', sprite: doorAIVDAnim },
	{ id: 'door-aivd-invisble-animation', sprite: doorAIVDInvisAnim },
	{ id: 'camera-animation', sprite: cameraAnim },
	{ id: 'arcade-animation', sprite: arcadeAnim },
	{ id: 'catposter-animation', sprite: catposterAnim },
	{ id: 'spider-animation', sprite: spiderAnim },

	// Images
	{ id: 'aivd-logo', img: AivdLogo },
	{ id: 'aivd-house-1', img: AivdHouseOne },
	{ id: 'aivd-house-2', img: AivdHouseTwo },
	{ id: 'cameras-on-pole-left', img: CamerasOnPoleLeft },
	{ id: 'cameras-on-pole-right', img: CamerasOnPoleRight },
	{ id: 'pole', img: Pole },
	{ id: 'aivd-character-1', img: AivdCharacterOne },
	{ id: 'aivd-character-2', img: AivdCharacterTwo },
	{ id: 'aivd-character-3', img: AivdCharacterThree },
	{ id: 'black-car', img: BlackCar },
	{ id: 'camera-left', img: CameraLeft },
	{ id: 'camera-right', img: CameraRight },
	{ id: 'clock-big', img: ClockBig },
	{ id: 'enigma-plaque', img: EnigmaPlaque },
	{ id: 'enigma-stand', img: EnigmaStand },
	{ id: 'paintings', img: Paintings },
	{ id: 'painting', img: Painting },
	{ id: 'painting-background', img: PaintingBackground },
	{ id: 'plant', img: Plant },
	{ id: 'couch-chairs', img: CouchChairs },
	{ id: 'table-flowers', img: TableFlowers },
	{ id: 'visitor-pass-1', img: VisitorPassOne },
	{ id: 'visitor-pass-2', img: VisitorPassTwo },
	{ id: 'visitor-pass-3', img: VisitorPassThree },
	{ id: 'visitor-pass-4', img: VisitorPassFour },
	{ id: 'visitor-pass-5', img: VisitorPassFive },
	{ id: 'visitor-pass-6', img: VisitorPassSix },
	{ id: 'tech-hero-pass-1', img: TechHeroPassOne },
	{ id: 'tech-hero-pass-2', img: TechHeroPassTwo },
	{ id: 'tech-hero-pass-3', img: TechHeroPassThree },
	{ id: 'tech-hero-pass-4', img: TechHeroPassFour },
	{ id: 'tech-hero-pass-5', img: TechHeroPassFive },
	{ id: 'tech-hero-pass-6', img: TechHeroPassSix },
	{ id: 'bricks-small', img: BricksSmall },
	{ id: 'bricks-big', img: BricksBig },
	{ id: 'aivd-desk', img: AivdDesk },
	{ id: 'spiderweb', img: Spiderweb },
	{ id: 'spiderweb-ceiling', img: SpiderwebCeiling },
	{ id: 'photo', img: Photo },
	{ id: 'trash', img: Trash },
	{ id: 'summerschool-sign', img: SummerschoolSign },
	{ id: 'key', img: Key }
];
