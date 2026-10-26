import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'RivmLogoAnim',
		sprite: 'textrol_rivm_400x131_00000000',
		amountOfImages: 49,
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
		text: 'GOED DAT JE ER BENT, HELD. WELKOM BIJ HET <yellow-rivm>RIVM</yellow-rivm>!',
		hasTextCloud: 'centered',
		positionY: 125,
		positionX: 175,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 164,
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
		text: 'WE KUNNEN JE HULP GOED GEBRUIKEN!',
		hasTextCloud: 'centered',
		positionY: 128,
		positionX: 195,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 124,
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
		name: 'text-cloud-3',
		text: 'KOM SNEL VERDER DAN LAAT IK JE ZIEN WAT WE HIER ALLEMAAL DOEN!',
		hasTextCloud: 'centered',
		positionY: 120,
		positionX: 158,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 194,
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
		positionY: 285,
		positionX: 435,
		posRelativeTo: 'rivm-house',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
