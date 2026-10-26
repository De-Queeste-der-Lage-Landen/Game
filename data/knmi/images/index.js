function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const knmiLogoAnim = importAll(require.context('@/assets/images/elements/knmi/knmi-logo', false, /\.(png)$/));
const characterKnmiAnim = importAll(require.context('@/assets/images/elements/knmi/character', false, /\.(png)$/));
const codeRedAnim = importAll(require.context('@/assets/images/elements/knmi/code-red', false, /\.(png)$/));
const doorKNMIAnim = importAll(require.context('@/assets/images/elements/knmi/door', false, /\.(png)$/));

const boardOneGr = importAll(require.context('@/assets/images/elements/knmi/board-1-green', false, /\.(png)$/));
const boardTwoGr = importAll(require.context('@/assets/images/elements/knmi/board-2-green', false, /\.(png)$/));
const boardThreeGr = importAll(require.context('@/assets/images/elements/knmi/board-3-green', false, /\.(png)$/));
const boardFourGr = importAll(require.context('@/assets/images/elements/knmi/board-4-green', false, /\.(png)$/));
const boardOneOr = importAll(require.context('@/assets/images/elements/knmi/board-1-orange', false, /\.(png)$/));
const boardTwoOr = importAll(require.context('@/assets/images/elements/knmi/board-2-orange', false, /\.(png)$/));
const boardThreeOr = importAll(require.context('@/assets/images/elements/knmi/board-3-orange', false, /\.(png)$/));
const boardFourOr = importAll(require.context('@/assets/images/elements/knmi/board-4-orange', false, /\.(png)$/));
const boardOneRe = importAll(require.context('@/assets/images/elements/knmi/board-1-red', false, /\.(png)$/));
const boardTwoRe = importAll(require.context('@/assets/images/elements/knmi/board-2-red', false, /\.(png)$/));
const boardThreeRe = importAll(require.context('@/assets/images/elements/knmi/board-3-red', false, /\.(png)$/));
const boardFourRe = importAll(require.context('@/assets/images/elements/knmi/board-4-red', false, /\.(png)$/));

// Images
import KnmiLogo from '@/assets/images/elements/knmi/knmi-logo.png';
import KnmiCharacterOne from '@/assets/images/elements/knmi/character-1.png';
import KnmiCharacterOneArmDown from '@/assets/images/elements/knmi/character-1-arm-down.png';
import KnmiCharacterTwo from '@/assets/images/elements/knmi/character-2.png';
import KnmiCharacterThree from '@/assets/images/elements/knmi/character-3.png';
import KnmiCharacterFour from '@/assets/images/elements/knmi/character-4.png';
import KnmiCharacterFive from '@/assets/images/elements/knmi/character-5.png';
import KnmiCharacterSix from '@/assets/images/elements/knmi/character-6.png';
import KnmiCharacterSeven from '@/assets/images/elements/knmi/character-7.png';
import KnmiCharacterEight from '@/assets/images/elements/knmi/character-8.png';
import KnmiCharacterNine from '@/assets/images/elements/knmi/character-9.png';
import Farm from '@/assets/images/elements/knmi/farm-2.png';
import KnmiSecondaryBg from '@/assets/images/elements/knmi/knmi-secondary-bg.png';
import WeatherStation from '@/assets/images/elements/knmi/weather-station.png';
import Watercooler from '@/assets/images/elements/knmi/watercooler.png';
import WindowWithTrees from '@/assets/images/elements/knmi/window-with-trees.png';
import DeskGreyBrown from '@/assets/images/elements/knmi/desk-grey-brown.png';
import DeskGreyBrownBooks from '@/assets/images/elements/knmi/desk-grey-brown-books.png';
// import PlanBoardToday from '@/assets/images/elements/knmi/plan-board-today.png';
// import PlanBoardTomorrow from '@/assets/images/elements/knmi/plan-board-tomorrow.png';
import CodeRedSignInactive from '@/assets/images/elements/knmi/code-red-sign-inactive.png';
import CodeRedSignActive from '@/assets/images/elements/knmi/code-red-sign-active.png';

export default [
	// Animations
	{ id: 'knmi-logo-animation', sprite: knmiLogoAnim },
	{ id: 'character-knmi-animation', sprite: characterKnmiAnim },
	{ id: 'code-red-animation', sprite: codeRedAnim },
	{ id: 'door-knmi-animation', sprite: doorKNMIAnim },
	{ id: 'board-1-green', sprite: boardOneGr },
	{ id: 'board-2-green', sprite: boardTwoGr },
	{ id: 'board-3-green', sprite: boardThreeGr },
	{ id: 'board-4-green', sprite: boardFourGr },
	{ id: 'board-1-orange', sprite: boardOneOr },
	{ id: 'board-2-orange', sprite: boardTwoOr },
	{ id: 'board-3-orange', sprite: boardThreeOr },
	{ id: 'board-4-orange', sprite: boardFourOr },
	{ id: 'board-1-red', sprite: boardOneRe },
	{ id: 'board-2-red', sprite: boardTwoRe },
	{ id: 'board-3-red', sprite: boardThreeRe },
	{ id: 'board-4-red', sprite: boardFourRe },

	// Images
	{ id: 'knmi-logo', img: KnmiLogo },
	{ id: 'knmi-character-1', img: KnmiCharacterOne },
	{ id: 'knmi-character-1-arm-down', img: KnmiCharacterOneArmDown },
	{ id: 'knmi-character-2', img: KnmiCharacterTwo },
	{ id: 'knmi-character-3', img: KnmiCharacterThree },
	{ id: 'knmi-character-4', img: KnmiCharacterFour },
	{ id: 'knmi-character-5', img: KnmiCharacterFive },
	{ id: 'knmi-character-6', img: KnmiCharacterSix },
	{ id: 'knmi-character-7', img: KnmiCharacterSeven },
	{ id: 'knmi-character-8', img: KnmiCharacterEight },
	{ id: 'knmi-character-9', img: KnmiCharacterNine },
	{ id: 'farm', img: Farm },
	{ id: 'knmi-secondary-bg', img: KnmiSecondaryBg },
	{ id: 'weather-station', img: WeatherStation },
	{ id: 'water-cooler', img: Watercooler },
	{ id: 'window-with-trees', img: WindowWithTrees },
	{ id: 'desk-grey-brown', img: DeskGreyBrown },
	{ id: 'desk-grey-brown-books', img: DeskGreyBrownBooks },
	// { id: 'plan-board-today', img: PlanBoardToday },
	// { id: 'plan-board-tomorrow', img: PlanBoardTomorrow },
	{ id: 'code-red-sign-inactive', img: CodeRedSignInactive },
	{ id: 'code-red-sign-active', img: CodeRedSignActive }
];
