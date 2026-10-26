function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const logoIvoAnim = importAll(require.context('@/assets/images/elements/ivo/ivo-logo', false, /\.(png)$/));
const doorIvoAnim = importAll(require.context('@/assets/images/elements/ivo/door', false, /\.(png)$/));
const kingIvoAnim = importAll(require.context('@/assets/images/elements/ivo/king', false, /\.(png)$/));
const lampIvoAnim = importAll(require.context('@/assets/images/elements/ivo/lamp', false, /\.(png)$/));
const ghettoblasterIvoAnim = importAll(
	require.context('@/assets/images/elements/ivo/ghettoblaster', false, /\.(png)$/)
);

// Images
import IvoLogo from '@/assets/images/elements/ivo/ivo-logo.png';
import IvoHouse from '@/assets/images/elements/ivo/ivo-house.png';
import IvoCharacterOne from '@/assets/images/elements/ivo/ivo-character-1.png';
import IvoCharacterTwo from '@/assets/images/elements/ivo/ivo-character-2.png';
import IvoCharacterThree from '@/assets/images/elements/ivo/ivo-character-3.png';
import IvoCharacterFour from '@/assets/images/elements/ivo/ivo-character-4.png';
import IvoCharacterFive from '@/assets/images/elements/ivo/ivo-character-5.png';
import JudgesOne from '@/assets/images/elements/ivo/judges.png';
import JudgeOne from '@/assets/images/elements/ivo/judge-1.png';
import JudgeTwo from '@/assets/images/elements/ivo/judge-2.png';
import JudgeThree from '@/assets/images/elements/ivo/judge-3.png';
import Judge from '@/assets/images/elements/ivo/judge.png';
import King from '@/assets/images/elements/ivo/king.png';
import Exit from '@/assets/images/elements/ivo/exit.png';
import Devops from '@/assets/images/elements/ivo/devops.png';
import CourtRoom from '@/assets/images/elements/ivo/courtroom.png';
import CourtTable from '@/assets/images/elements/ivo/court-table.png';
import Books from '@/assets/images/elements/ivo/books.png';
import DeskLamp from '@/assets/images/elements/ivo/desk-lamp.png';
import FireExtinguisher from '@/assets/images/elements/ivo/fire-extinguisher.png';
import FutureTellerBall from '@/assets/images/elements/ivo/future-teller-ball.png';
import IvoDeskOne from '@/assets/images/elements/ivo/ivo-desk-1.png';
import IvoDeskSensei from '@/assets/images/elements/ivo/ivo-desk-sensei.png';
import IvoDeskTwo from '@/assets/images/elements/ivo/ivo-desk-2.png';
import WorldGlobe from '@/assets/images/elements/ivo/world-globe.png';
import Jagermeister from '@/assets/images/elements/ivo/jagermeister.png';
import MirrorSun from '@/assets/images/elements/ivo/mirror-sun.png';
import LittleCactus from '@/assets/images/elements/ivo/little-cactus.png';
import LogoWall from '@/assets/images/elements/ivo/logo-wall.png';
import IvoPlant from '@/assets/images/elements/ivo/ivo-plant.png';
import OldRadio from '@/assets/images/elements/ivo/old-radio.png';
import WoodenPlank from '@/assets/images/elements/ivo/wooden-plank.png';
import IvoSecondaryBg from '@/assets/images/elements/ivo/ivo-secondary-bg.svg';
import IvoSecondaryBgTwo from '@/assets/images/elements/ivo/ivo-secondary-bg-2.png';

export default [
	// Animations
	{ id: 'door-ivo-animation', sprite: doorIvoAnim },
	{ id: 'logo-ivo-animation', sprite: logoIvoAnim },
	{ id: 'king-ivo-animation', sprite: kingIvoAnim },
	{ id: 'lamp-ivo-animation', sprite: lampIvoAnim },
	{ id: 'ghettoblaster-ivo-animation', sprite: ghettoblasterIvoAnim },

	// Images
	{ id: 'ivo-house', img: IvoHouse },
	{ id: 'ivo-logo', img: IvoLogo },
	{ id: 'ivo-character-1', img: IvoCharacterOne },
	{ id: 'ivo-character-2', img: IvoCharacterTwo },
	{ id: 'ivo-character-3', img: IvoCharacterThree },
	{ id: 'ivo-character-4', img: IvoCharacterFour },
	{ id: 'ivo-character-5', img: IvoCharacterFive },
	{ id: 'ivo-secondary-bg', img: IvoSecondaryBg },
	{ id: 'ivo-secondary-bg-2', img: IvoSecondaryBgTwo },
	{ id: 'judges-1', img: JudgesOne },
	{ id: 'judge-1', img: JudgeOne },
	{ id: 'judge-2', img: JudgeTwo },
	{ id: 'judge-3', img: JudgeThree },
	{ id: 'judge', img: Judge },
	{ id: 'king', img: King },
	{ id: 'exit', img: Exit },
	{ id: 'devops', img: Devops },
	{ id: 'court-room', img: CourtRoom },
	{ id: 'court-table', img: CourtTable },
	{ id: 'books', img: Books },
	{ id: 'desk-lamp', img: DeskLamp },
	{ id: 'fire-extinguisher', img: FireExtinguisher },
	{ id: 'future-teller-ball', img: FutureTellerBall },
	{ id: 'ivo-desk-sensei', img: IvoDeskSensei },
	{ id: 'ivo-desk-1', img: IvoDeskOne },
	{ id: 'ivo-desk-2', img: IvoDeskTwo },
	{ id: 'world-globe', img: WorldGlobe },
	{ id: 'jagermeister', img: Jagermeister },
	{ id: 'mirror-sun', img: MirrorSun },
	{ id: 'little-cactus', img: LittleCactus },
	{ id: 'logo-wall', img: LogoWall },
	{ id: 'old-radio', img: OldRadio },
	{ id: 'ivo-plant', img: IvoPlant },
	{ id: 'wooden-plank', img: WoodenPlank }
];
