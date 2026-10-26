import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'duoLogoAnim',
		sprite: 'textrol_duo_400x131_00000000',
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
		text: 'HALLO HELD EN WELKOM BIJ DUO. HET IS EXAMENTIJD, WE KUNNEN JOUW HULP GOED GEBRUIKEN. KOM BINNEN!',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 127,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 304,
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
		positionY: 88,
		positionX: 262,
		posRelativeTo: 'duo-house',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
