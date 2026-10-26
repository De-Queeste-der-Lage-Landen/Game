import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'JustidLogo',
		sprite: 'textrol_justid_400x131_00000000',
		amountOfImages: 42,
		autoPlay: false,
		loop: false,
		scalesToWidth: true,
		center: true,
		width: 400,
		positionY: 102,
		positionX: 248,
		animation: {
			type: animationTypes.FADE_IN,
			playSpriteOnFinish: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-1',
		text: 'HEY HELD! WELKOM BIJ JUSTID. KOM VERDER, DAN LAAT IK JE ZIEN WAT WE HIER ALLEMAAL DOEN.',
		hasTextCloud: 'centered',
		positionY: 110,
		positionX: 220,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 214,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 75,
		positionX: 126,
		posRelativeTo: 'justid-house',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
