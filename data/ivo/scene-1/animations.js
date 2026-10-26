import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'logoIvoAnim',
		sprite: 'textrol_ivo_400x131_00000000',
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
		text: 'HI HELD, WELKOM BIJ IVO RECHTSPRAAK.',
		hasTextCloud: 'centered',
		positionY: 145,
		positionX: 145,
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
		text: 'IVO RECHTSPRAAK MAAKT ALS IV- EN IT-DIENSTVERLENER ONDERDEEL UIT VAN DE NEDERLANDSE RECHTSPRAAK EN MAAKT RECHTSPRAAK DIGITAAL TOEGANKELIJK.',
		hasTextCloud: 'centered',
		positionY: 65,
		positionX: 90,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 270,
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
		positionY: 90,
		positionX: 285,
		posRelativeTo: 'ivo-house',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
