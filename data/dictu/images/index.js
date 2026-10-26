function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const DictuLogoAnim = importAll(require.context('@/assets/images/elements/dictu/dictu-logo', false, /\.(png)$/));
const DictuDoorAnim = importAll(require.context('@/assets/images/elements/dictu/dictu-door', false, /\.(png)$/));
const DictuScreen1Anim = importAll(require.context('@/assets/images/elements/dictu/dictu-screen-1', false, /\.(png)$/));
const DictuScreen2Anim = importAll(require.context('@/assets/images/elements/dictu/dictu-screen-2', false, /\.(png)$/));
const DictuScreen3Anim = importAll(require.context('@/assets/images/elements/dictu/dictu-screen-3', false, /\.(png)$/));
const DictuScreen4Anim = importAll(require.context('@/assets/images/elements/dictu/dictu-screen-4', false, /\.(png)$/));

// Images
import DictuHouse from '@/assets/images/elements/dictu/dictu-house-1.png';
import DictuDoor from '@/assets/images/elements/dictu/dictu-door-1.png';
import DictuPlant from '@/assets/images/elements/dictu/dictu-plant.png';
import DictuDeskOne from '@/assets/images/elements/dictu/dictu-desk-1.png';
import DictuDeskTwo from '@/assets/images/elements/dictu/dictu-desk-2.png';
import DictuClock from '@/assets/images/elements/dictu/dictu-clock.png';
import DictuBike from '@/assets/images/elements/dictu/dictu-bike.png';
import DictuScreensOne from '@/assets/images/elements/dictu/dictu-screens-1.png';
import DictuScreensTwo from '@/assets/images/elements/dictu/dictu-screens-2.png';
import DictuCharacterOne from '@/assets/images/elements/dictu/dictu-character-1.png';
import DictuCharacterTwo from '@/assets/images/elements/dictu/dictu-character-2.png';
import DictuCharacterThree from '@/assets/images/elements/dictu/dictu-character-3.png';
import DictuCharacterFour from '@/assets/images/elements/dictu/dictu-character-4.png';
import DictuSecondaryBg from '@/assets/images/elements/dictu/dictu-secondary-bg.svg';

export default [
	// Animations
	{ id: 'dictu-logo-animation', sprite: DictuLogoAnim },
	{ id: 'dictu-door-animation', sprite: DictuDoorAnim },
	{ id: 'dictu-screen-1-animation', sprite: DictuScreen1Anim },
	{ id: 'dictu-screen-2-animation', sprite: DictuScreen2Anim },
	{ id: 'dictu-screen-3-animation', sprite: DictuScreen3Anim },
	{ id: 'dictu-screen-4-animation', sprite: DictuScreen4Anim },

	// Images
	{ id: 'dictu-house', img: DictuHouse },
	{ id: 'dictu-door', img: DictuDoor },
	{ id: 'dictu-plant', img: DictuPlant },
	{ id: 'dictu-desk-1', img: DictuDeskOne },
	{ id: 'dictu-desk-2', img: DictuDeskTwo },
	{ id: 'dictu-clock', img: DictuClock },
	{ id: 'dictu-bike', img: DictuBike },
	{ id: 'dictu-screens-1', img: DictuScreensOne },
	{ id: 'dictu-screens-2', img: DictuScreensTwo },
	{ id: 'dictu-character-1', img: DictuCharacterOne },
	{ id: 'dictu-character-2', img: DictuCharacterTwo },
	{ id: 'dictu-character-3', img: DictuCharacterThree },
	{ id: 'dictu-character-4', img: DictuCharacterFour },
	{ id: 'dictu-secondary-bg', img: DictuSecondaryBg }
];
