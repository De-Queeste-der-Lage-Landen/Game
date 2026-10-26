function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const justidLogoAnim = importAll(require.context('@/assets/images/elements/justid/logo', false, /\.(png)$/));
const doorJustidAnim = importAll(require.context('@/assets/images/elements/justid/door', false, /\.(png)$/));
const coffeeCupAnim = importAll(require.context('@/assets/images/elements/justid/coffee-cup', false, /\.(png)$/));
// const cMachineAnim = importAll(require.context('@/assets/images/elements/justid/coffee-machine', false, /\.(png)$/));
const eNotiAnim = importAll(require.context('@/assets/images/elements/justid/email-notification', false, /\.(png)$/));

const boardOneJus = importAll(require.context('@/assets/images/elements/justid/board-1', false, /\.(png)$/));
const boardTwoJus = importAll(require.context('@/assets/images/elements/justid/board-2', false, /\.(png)$/));
const boardThreeJus = importAll(require.context('@/assets/images/elements/justid/board-3', false, /\.(png)$/));
const boardFourJus = importAll(require.context('@/assets/images/elements/justid/board-4', false, /\.(png)$/));

// Images
import JustidLogo from '@/assets/images/elements/justid/justid-logo.svg';
import JustidHouse from '@/assets/images/elements/justid/justid-house.png';
import JustidSecondaryBg from '@/assets/images/elements/justid/justid-secondary-bg.svg';
import BoardPoliceman from '@/assets/images/elements/justid/board-policeman.png';
import JustidBoardBig from '@/assets/images/elements/justid/board-big.png';
import BoardSuspect from '@/assets/images/elements/justid/board-suspect.png';
import BoardSuspectTwo from '@/assets/images/elements/justid/board-suspect-2.png';
import BoardWithToken from '@/assets/images/elements/justid/board-with-token.png';
import BoardEndOfMessage from '@/assets/images/elements/justid/end-of-message.png';
import JustidCharacterOne from '@/assets/images/elements/justid/character-1.png';
import JustidCharacterTwo from '@/assets/images/elements/justid/character-2.png';
import JustidCharacterThree from '@/assets/images/elements/justid/character-3.png';
import JustidCharacterFour from '@/assets/images/elements/justid/character-4.png';
// import CoffeeTable from '@/assets/images/elements/justid/coffee-table.png';
import JustidDeskBrown from '@/assets/images/elements/justid/desk-brown.png';
import JustidDeskBrownCoffee from '@/assets/images/elements/justid/desk-brown-coffee.png';
import EmailNotification from '@/assets/images/elements/justid/email-notification.png';
import ButtonWebtoken from '@/assets/images/elements/justid/button-webtoken.png';
import tokenCopied from '@/assets/images/elements/justid/copied.png';

export default [
	// Animations
	{ id: 'justid-logo-animation', sprite: justidLogoAnim },
	{ id: 'door-justid-animation', sprite: doorJustidAnim },
	{ id: 'coffee-cup-animation', sprite: coffeeCupAnim },
	// { id: 'coffee-machine-animation', sprite: cMachineAnim },
	{ id: 'email-notification-animation', sprite: eNotiAnim },
	{ id: 'board-1-justid', sprite: boardOneJus },
	{ id: 'board-2-justid', sprite: boardTwoJus },
	{ id: 'board-3-justid', sprite: boardThreeJus },
	{ id: 'board-4-justid', sprite: boardFourJus },

	// Images
	{ id: 'justid-logo', img: JustidLogo },
	{ id: 'justid-house', img: JustidHouse },
	{ id: 'justid-secondary-bg', img: JustidSecondaryBg },
	{ id: 'justid-board-big', img: JustidBoardBig },
	{ id: 'board-policeman', img: BoardPoliceman },
	{ id: 'board-suspect', img: BoardSuspect },
	{ id: 'board-suspect-2', img: BoardSuspectTwo },
	{ id: 'board-with-token', img: BoardWithToken },
	{ id: 'board-end-of-message', img: BoardEndOfMessage },
	{ id: 'justid-character-1', img: JustidCharacterOne },
	{ id: 'justid-character-2', img: JustidCharacterTwo },
	{ id: 'justid-character-3', img: JustidCharacterThree },
	{ id: 'justid-character-4', img: JustidCharacterFour },
	// { id: 'coffee-table', img: CoffeeTable },
	{ id: 'justid-desk-brown', img: JustidDeskBrown },
	{ id: 'justid-desk-brown-coffee', img: JustidDeskBrownCoffee },
	{ id: 'email-notification', img: EmailNotification },
	{ id: 'button-webtoken', img: ButtonWebtoken },
	{ id: 'token-copied', img: tokenCopied }
];
