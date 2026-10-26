import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'DictuLogoAnim',
		sprite: 'textrol_dictu_400x131_00000000',
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
		text: 'HI HELD, WELKOM BIJ <blue-dictu>DICTU</blue-dictu>!',
		hasTextCloud: 'centered',
		positionY: 125,
		positionX: 210,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 104,
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
		text: 'ONZE IT-SYSTEMEN SPELEN EEN BELANGRIJKE ROL IN DE DIENSTVERLENING VAN DE OVERHEID AAN BURGERS EN BEDRIJVEN.',
		hasTextCloud: 'centered',
		positionY: 85,
		positionX: 145,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 220,
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
		text: `WE ONTWIKKELEN MET 1800 COLLEGA'S APPLICATIES EN WEBSITES VOOR DE RIJKSOVERHEID.`,
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 145,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 224,
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
		name: 'text-cloud-4',
		text: 'MAAR OOK SYSTEMEN VOOR SUBSIDIE- AANVRAGEN OM TE VERDUURZAMEN...',
		hasTextCloud: 'centered',
		positionY: 125,
		positionX: 150,
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
		name: 'text-cloud-5',
		text: '...APPS VOOR 1,8 MILJOEN INSPECTIES VAN O.A. DE VOEDSELVEILIGHEID OF VOOR DE EXPORT.',
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 165,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 204,
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
		name: 'text-cloud-6',
		text: 'KOM SNEL BINNEN! WIJ HEBBEN JOU NODIG OM EEN PROBLEEM MET <blue-dictu>DATA</blue-dictu> OP TE LOSSEN.',
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 165,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 174,
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
		positionY: 410,
		positionX: 525,
		posRelativeTo: 'dictu-house',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
