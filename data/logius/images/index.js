function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const logiusLogoAnim = importAll(require.context('@/assets/images/elements/logius/logo', false, /\.(png)$/));
const characterLogiusAnim = importAll(require.context('@/assets/images/elements/logius/character', false, /\.(png)$/));
const doorLogiusAnim = importAll(require.context('@/assets/images/elements/logius/door', false, /\.(png)$/));
const serverAnim = importAll(require.context('@/assets/images/elements/logius/server', false, /\.(png)$/));
const boardOneLog = importAll(require.context('@/assets/images/elements/logius/board-1', false, /\.(png)$/));
const boardTwoLog = importAll(require.context('@/assets/images/elements/logius/board-2', false, /\.(png)$/));
const boardThreeLog = importAll(require.context('@/assets/images/elements/logius/board-3', false, /\.(png)$/));
const boardFourLog = importAll(require.context('@/assets/images/elements/logius/board-4', false, /\.(png)$/));
const catAnim = importAll(require.context('@/assets/images/elements/logius/cat', false, /\.(png)$/));

// Images
import LogiusHouse from '@/assets/images/elements/logius/logius-house-2.png';
import LogiusSecondaryBg from '@/assets/images/elements/logius/logius-secondary-bg.png';
import LogiusCharacterOne from '@/assets/images/elements/logius/character-1.png';
import LogiusCharacterTwo from '@/assets/images/elements/logius/character-2.png';
import LogiusCharacterThree from '@/assets/images/elements/logius/character-3.png';
import CatBlock from '@/assets/images/elements/logius/cat-block.png';
import LogiusDeskBlue from '@/assets/images/elements/logius/desk-blue.png';

export default [
	// Animations
	{ id: 'logius-logo-animation', sprite: logiusLogoAnim },
	{ id: 'character-logius-animation', sprite: characterLogiusAnim },
	{ id: 'door-logius-animation', sprite: doorLogiusAnim },
	{ id: 'server-animation', sprite: serverAnim },
	{ id: 'board-1-logius', sprite: boardOneLog },
	{ id: 'board-2-logius', sprite: boardTwoLog },
	{ id: 'board-3-logius', sprite: boardThreeLog },
	{ id: 'board-4-logius', sprite: boardFourLog },
	{ id: 'cat-animation', sprite: catAnim },

	// Images
	{ id: 'logius-house', img: LogiusHouse },
	{ id: 'logius-secondary-bg', img: LogiusSecondaryBg },
	{ id: 'logius-character-1', img: LogiusCharacterOne },
	{ id: 'logius-character-2', img: LogiusCharacterTwo },
	{ id: 'logius-character-3', img: LogiusCharacterThree },
	{ id: 'cat-block', img: CatBlock },
	{ id: 'logius-desk-blue', img: LogiusDeskBlue }
];
