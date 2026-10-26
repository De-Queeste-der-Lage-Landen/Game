function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const JioLogoAnim = importAll(require.context('@/assets/images/elements/jio/jio-logo', false, /\.(png)$/));
const JioDoorAnim = importAll(require.context('@/assets/images/elements/jio/jio-door', false, /\.(png)$/));
const JioZonAnim = importAll(require.context('@/assets/images/elements/jio/jio-zon', false, /\.(png)$/));

// Images
import JioHouse from '@/assets/images/elements/jio/jio-house.png';
// import JioDoor from '@/assets/images/elements/jio/jio-door.png';
import JioDeskOne from '@/assets/images/elements/jio/jio-desk.png';
import JioDeskTwo from '@/assets/images/elements/jio/jio-desk-2.png';
import JioSun from '@/assets/images/elements/jio/jio-sun.png';
import JioPlanBoard from '@/assets/images/elements/jio/jio-plan-board.png';
import JioScreen from '@/assets/images/elements/jio/jio-screen.png';
import JioNameTag from '@/assets/images/elements/jio/jio-name-tag.png';
import JioScreenBehindBars from '@/assets/images/elements/jio/jio-screen-behind-bars.png';
import JioCharacterOne from '@/assets/images/elements/jio/jio-character-1.png';
import JioCharacterTwo from '@/assets/images/elements/jio/jio-character-2.png';
import JioCharacterThree from '@/assets/images/elements/jio/jio-character-3.png';
import JioSecondaryBg from '@/assets/images/elements/jio/jio-secondary-bg.svg';
import EasterEggBgJio from '@/assets/images/elements/jio/jio-easter-egg-bg.png';

export default [
	// Animations
	{ id: 'jio-logo-animation', sprite: JioLogoAnim },
	{ id: 'jio-door-animation', sprite: JioDoorAnim },
	{ id: 'jio-zon-animation', sprite: JioZonAnim },

	// Images
	{ id: 'jio-house', img: JioHouse },
	// { id: 'jio-door', img: JioDoor },
	{ id: 'jio-desk-1', img: JioDeskOne },
	{ id: 'jio-desk-2', img: JioDeskTwo },
	{ id: 'jio-sun', img: JioSun },
	{ id: 'jio-plan-board', img: JioPlanBoard },
	{ id: 'jio-screen', img: JioScreen },
	{ id: 'jio-screen-behind-bars', img: JioScreenBehindBars },
	{ id: 'jio-character-1', img: JioCharacterOne },
	{ id: 'jio-character-2', img: JioCharacterTwo },
	{ id: 'jio-character-3', img: JioCharacterThree },
	{ id: 'jio-secondary-bg', img: JioSecondaryBg },
	{ id: 'easter-egg-bg-jio', img: EasterEggBgJio },
	{ id: 'jio-name-tag', img: JioNameTag }
];
