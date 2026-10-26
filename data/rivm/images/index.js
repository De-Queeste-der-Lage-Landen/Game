function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const RivmLogoAnim = importAll(require.context('@/assets/images/elements/rivm/rivm-logo', false, /\.(png)$/));
const RivmDoorAnim = importAll(require.context('@/assets/images/elements/rivm/rivm-door', false, /\.(png)$/));
const RivmPoster = importAll(require.context('@/assets/images/elements/rivm/rivm-poster', false, /\.(png)$/));
const RivmScreenOne = importAll(require.context('@/assets/images/elements/rivm/rivm-screen-1', false, /\.(png)$/));
const RivmScreenTwo = importAll(require.context('@/assets/images/elements/rivm/rivm-screen-2', false, /\.(png)$/));

// Images
import RivmHouse from '@/assets/images/elements/rivm/rivm-house-1.png';
import RivmDoor from '@/assets/images/elements/rivm/rivm-door-1.png';
import RivmDesk from '@/assets/images/elements/rivm/rivm-desk.png';
import RivmClock from '@/assets/images/elements/rivm/rivm-clock.png';
import RivmScreens from '@/assets/images/elements/rivm/rivm-screens.png';
import RivmTulipPink from '@/assets/images/elements/rivm/rivm-tulip-pink.png';
import RivmTulipYellow from '@/assets/images/elements/rivm/rivm-tulip-yellow.png';
import RivmPlant from '@/assets/images/elements/rivm/rivm-plant.png';
import RivmCharacterOne from '@/assets/images/elements/rivm/rivm-character-1.png';
import RivmCharacterTwo from '@/assets/images/elements/rivm/rivm-character-2.png';
import RivmCharacterThree from '@/assets/images/elements/rivm/rivm-character-3.png';
import RivmCharacterFour from '@/assets/images/elements/rivm/rivm-character-4.png';
import RivmCharacterTwoHappy from '@/assets/images/elements/rivm/rivm-character-2-happy.png';
import RivmCharacterThreeHappy from '@/assets/images/elements/rivm/rivm-character-3-happy.png';
import RivmCharacterFourHappy from '@/assets/images/elements/rivm/rivm-character-4-happy.png';
import RivmSecondaryBg from '@/assets/images/elements/rivm/rivm-secondary-bg.svg';
import EasterEggBgRivm from '@/assets/images/elements/rivm/rivm-easter-egg-bg.png';

export default [
	// Animations
	{ id: 'rivm-logo-animation', sprite: RivmLogoAnim },
	{ id: 'rivm-door-animation', sprite: RivmDoorAnim },
	{ id: 'rivm-poster-animation', sprite: RivmPoster },
	{ id: 'rivm-screen-1-animation', sprite: RivmScreenOne },
	{ id: 'rivm-screen-2-animation', sprite: RivmScreenTwo },

	// Images
	{ id: 'rivm-house', img: RivmHouse },
	{ id: 'rivm-door', img: RivmDoor },
	{ id: 'rivm-desk', img: RivmDesk },
	{ id: 'rivm-clock', img: RivmClock },
	{ id: 'rivm-screens', img: RivmScreens },
	{ id: 'rivm-tulip-pink', img: RivmTulipPink },
	{ id: 'rivm-tulip-yellow', img: RivmTulipYellow },
	{ id: 'rivm-plant', img: RivmPlant },
	{ id: 'rivm-character-1', img: RivmCharacterOne },
	{ id: 'rivm-character-2', img: RivmCharacterTwo },
	{ id: 'rivm-character-3', img: RivmCharacterThree },
	{ id: 'rivm-character-4', img: RivmCharacterFour },
	{ id: 'rivm-character-2-happy', img: RivmCharacterTwoHappy },
	{ id: 'rivm-character-3-happy', img: RivmCharacterThreeHappy },
	{ id: 'rivm-character-4-happy', img: RivmCharacterFourHappy },
	{ id: 'rivm-secondary-bg', img: RivmSecondaryBg },
	{ id: 'easter-egg-bg-rivm', img: EasterEggBgRivm }
];
