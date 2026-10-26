import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'FIJN DAT JE ER BENT. WIJ ZIJN BENIEUWD NAAR WAT JE NOG MEER IN JE MARS HEBT.',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 380,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 185,
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
		name: 'text-cloud-2',
		text: 'NEEM PLAATS ACHTER MIJN BUREAU, IK HEB NAMELIJK EEN LEUKE <light-grey>CHALLENGE</light-grey> VOOR JE!',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 380,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 185,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT,
			animateCharacter: 'aivd-character-3',
			charEndPositionX: 560
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
		positionY: 195,
		positionX: 440,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'text-cloud-3',
		text: 'KAN JIJ DEZE OLD SCHOOL HEX <purple>HACKING-GAME</purple> OPLOSSEN?',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 470,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 145,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	}
];
