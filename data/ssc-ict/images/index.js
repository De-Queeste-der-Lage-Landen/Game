function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const serverAnim = importAll(require.context('@/assets/images/elements/logius/server', false, /\.(png)$/));
const SscIctLogoAnim = importAll(require.context('@/assets/images/elements/ssc-ict/ssc-ict-logo', false, /\.(png)$/));
const SscIctDoorAnim = importAll(require.context('@/assets/images/elements/ssc-ict/ssc-ict-door', false, /\.(png)$/));
const SscIctBoardOneAnim = importAll(
	require.context('@/assets/images/elements/ssc-ict/ssc-ict-board-1', false, /\.(png)$/)
);
const SscIctBoardTwoAnim = importAll(
	require.context('@/assets/images/elements/ssc-ict/ssc-ict-board-2', false, /\.(png)$/)
);
const SscIctBoardThreeAnim = importAll(
	require.context('@/assets/images/elements/ssc-ict/ssc-ict-board-3', false, /\.(png)$/)
);
const SscIctBoardFourAnim = importAll(
	require.context('@/assets/images/elements/ssc-ict/ssc-ict-board-4', false, /\.(png)$/)
);

// Images
import SscIctHouse from '@/assets/images/elements/ssc-ict/ssc-ict-house.png';
import SscIctDoor from '@/assets/images/elements/ssc-ict/ssc-ict-door.png';
import SscIctCharacterOne from '@/assets/images/elements/ssc-ict/ssc-ict-character-1.png';
import SscIctCharacterTwo from '@/assets/images/elements/ssc-ict/ssc-ict-character-2.png';
import SscIctCharacterThree from '@/assets/images/elements/ssc-ict/ssc-ict-character-3.png';
import SscIctCharacterFour from '@/assets/images/elements/ssc-ict/ssc-ict-character-4.png';
import SscIctCharacterFive from '@/assets/images/elements/ssc-ict/ssc-ict-character-5.png';
import SscIctCharacterSix from '@/assets/images/elements/ssc-ict/ssc-ict-character-6.png';
import SscIctCharacterSeven from '@/assets/images/elements/ssc-ict/ssc-ict-character-7.png';
import SscIctBoardOne from '@/assets/images/elements/ssc-ict/ssc-ict-board-1.png';
import SscIctBoardTwo from '@/assets/images/elements/ssc-ict/ssc-ict-board-2.png';
import SscIctBoardThree from '@/assets/images/elements/ssc-ict/ssc-ict-board-3.png';
import SscIctBoardFour from '@/assets/images/elements/ssc-ict/ssc-ict-board-4.png';
import SscIctBoardSpaceInvaders from '@/assets/images/elements/ssc-ict/ssc-ict-board-space-invaders.png';
import SscIctBoardSuccess from '@/assets/images/elements/ssc-ict/ssc-ict-board-success.png';
import SscIctChairDesk from '@/assets/images/elements/ssc-ict/ssc-ict-chair-desk.png';
import SscIctDesk from '@/assets/images/elements/ssc-ict/ssc-ict-desk.png';
import SscIctOccupiedDesk from '@/assets/images/elements/ssc-ict/ssc-ict-occupied-desk.png';
import SscIctDeskTwo from '@/assets/images/elements/ssc-ict/ssc-ict-desk-2.png';
import SscIctDeskThree from '@/assets/images/elements/ssc-ict/ssc-ict-desk-3.png';
import SscIctClock from '@/assets/images/elements/ssc-ict/ssc-ict-clock.png';
import SscIctSecondaryBg from '@/assets/images/elements/ssc-ict/ssc-ict-secondary-bg.svg';
import SscIctWindowTrees from '@/assets/images/elements/ssc-ict/window-trees.png';
import SscIctSysteemBeheer from '@/assets/images/elements/ssc-ict/systeem-beheer.png';
import SscIctFiftyC from '@/assets/images/elements/ssc-ict/50-c.png';
import SscIctRedBike from '@/assets/images/elements/ssc-ict/ssc-ict-red-bike.png';
import SscIctTablePlant from '@/assets/images/elements/ssc-ict/table-plant.png';
import SscIctPoster from '@/assets/images/elements/ssc-ict/poster.png';
import SscIctBall from '@/assets/images/elements/ssc-ict/ball.png';
import EasterEggBgIvo from '@/assets/images/elements/ssc-ict/easter-egg-bg-ivo.png';

export default [
	// Animations
	{ id: 'server-ssc-ict-animation', sprite: serverAnim },
	{ id: 'ssc-ict-logo-animation', sprite: SscIctLogoAnim },
	{ id: 'ssc-ict-door-animation', sprite: SscIctDoorAnim },
	{ id: 'ssc-ict-board-1', sprite: SscIctBoardOneAnim },
	{ id: 'ssc-ict-board-2', sprite: SscIctBoardTwoAnim },
	{ id: 'ssc-ict-board-3', sprite: SscIctBoardThreeAnim },
	{ id: 'ssc-ict-board-4', sprite: SscIctBoardFourAnim },

	// Images
	{ id: 'ssc-ict-house', img: SscIctHouse },
	{ id: 'ssc-ict-door', img: SscIctDoor },
	{ id: 'ssc-ict-character-1', img: SscIctCharacterOne },
	{ id: 'ssc-ict-character-2', img: SscIctCharacterTwo },
	{ id: 'ssc-ict-character-3', img: SscIctCharacterThree },
	{ id: 'ssc-ict-character-4', img: SscIctCharacterFour },
	{ id: 'ssc-ict-character-5', img: SscIctCharacterFive },
	{ id: 'ssc-ict-character-6', img: SscIctCharacterSix },
	{ id: 'ssc-ict-character-7', img: SscIctCharacterSeven },
	{ id: 'ssc-ict-desk', img: SscIctDesk },
	{ id: 'ssc-ict-occupied-desk', img: SscIctOccupiedDesk },
	{ id: 'ssc-ict-desk-2', img: SscIctDeskTwo },
	{ id: 'ssc-ict-desk-3', img: SscIctDeskThree },
	{ id: 'ssc-ict-clock', img: SscIctClock },
	{ id: 'ssc-ict-window-trees', img: SscIctWindowTrees },
	{ id: 'ssc-ict-systeem-beheer', img: SscIctSysteemBeheer },
	{ id: 'ssc-ict-50-c', img: SscIctFiftyC },
	{ id: 'ssc-ict-board-1', img: SscIctBoardOne },
	{ id: 'ssc-ict-board-2', img: SscIctBoardTwo },
	{ id: 'ssc-ict-board-3', img: SscIctBoardThree },
	{ id: 'ssc-ict-board-4', img: SscIctBoardFour },
	{ id: 'ssc-ict-board-space-invaders', img: SscIctBoardSpaceInvaders },
	{ id: 'ssc-ict-board-success', img: SscIctBoardSuccess },
	{ id: 'ssc-ict-chair-desk', img: SscIctChairDesk },
	{ id: 'ssc-ict-red-bike', img: SscIctRedBike },
	{ id: 'ssc-ict-table-plant', img: SscIctTablePlant },
	{ id: 'ssc-ict-poster', img: SscIctPoster },
	{ id: 'ssc-ict-ball', img: SscIctBall },
	{ id: 'ssc-ict-secondary-bg', img: SscIctSecondaryBg },
	{ id: 'easter-egg-bg-ivo', img: EasterEggBgIvo }
];
