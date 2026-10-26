import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'KnmiLogo',
		sprite: 'textrol_knmi_400x131_00000000',
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
		text: 'WELKOM, GOED DAT JE ER BENT! LATEN WE METEEN BEGINNEN...',
		hasTextCloud: 'normal',
		positionY: 110,
		positionX: 173,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 165,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT,
			replaceChar: 'knmi-character-1-arm-down'
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
		positionY: 60,
		positionX: 92,
		posRelativeTo: 'farm',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
