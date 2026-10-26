function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const RwsLogoAnim = importAll(require.context('@/assets/images/elements/rws/rws-logo', false, /\.(png)$/));
const RwsDoorAnim = importAll(require.context('@/assets/images/elements/rws/rws-door', false, /\.(png)$/));

// Images
import RwsHouse from '@/assets/images/elements/rws/rws-house-1.png';
import RwsDoor from '@/assets/images/elements/rws/rws-door-1.png';
import RwsDesk from '@/assets/images/elements/rws/rws-desk.png';
import RwsTulipPink from '@/assets/images/elements/rws/rws-tulip-pink.png';
import RwsTulipYellow from '@/assets/images/elements/rws/rws-tulip-yellow.png';
import RwsArtObjects from '@/assets/images/elements/rws/rws-art-objects.png';
import RwsArtObjectOne from '@/assets/images/elements/rws/rws-art-object-1.png';
import RwsArtObjectTwo from '@/assets/images/elements/rws/rws-art-object-2.png';
import RwsArtObjectThree from '@/assets/images/elements/rws/rws-art-object-3.png';
import RwsPlanBoardToday from '@/assets/images/elements/rws/rws-plan-board-today.png';
import RwsPlanBoardTomorrow from '@/assets/images/elements/rws/rws-plan-board-tomorrow.png';
import RwsCharacterOne from '@/assets/images/elements/rws/rws-character-1.png';
import RwsCharacterTwo from '@/assets/images/elements/rws/rws-character-2.png';
import RwsCharacterThree from '@/assets/images/elements/rws/rws-character-3.png';
import RwsSecondaryBg from '@/assets/images/elements/rws/rws-secondary-bg.svg';
import RwsEasterEggBg from '@/assets/images/elements/rws/rws-easter-egg-bg.png';

export default [
	// Animations
	{ id: 'rws-logo-animation', sprite: RwsLogoAnim },
	{ id: 'rws-door-animation', sprite: RwsDoorAnim },

	// Images
	{ id: 'rws-house', img: RwsHouse },
	{ id: 'rws-door', img: RwsDoor },
	{ id: 'rws-desk', img: RwsDesk },
	{ id: 'rws-tulip-pink', img: RwsTulipPink },
	{ id: 'rws-tulip-yellow', img: RwsTulipYellow },
	{ id: 'rws-art-objects', img: RwsArtObjects },
	{ id: 'rws-art-object-1', img: RwsArtObjectOne },
	{ id: 'rws-art-object-2', img: RwsArtObjectTwo },
	{ id: 'rws-art-object-3', img: RwsArtObjectThree },
	{ id: 'rws-plan-board-today', img: RwsPlanBoardToday },
	{ id: 'rws-plan-board-tomorrow', img: RwsPlanBoardTomorrow },
	{ id: 'rws-character-1', img: RwsCharacterOne },
	{ id: 'rws-character-2', img: RwsCharacterTwo },
	{ id: 'rws-character-3', img: RwsCharacterThree },
	{ id: 'rws-secondary-bg', img: RwsSecondaryBg },
	{ id: 'rws-easter-egg-bg', img: RwsEasterEggBg }
];
