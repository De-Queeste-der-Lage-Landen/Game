import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'WELKOM BIJ NETWERKBEHEER!',
		hasTextCloud: 'normal',
		positionY: 140,
		positionX: 165,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 151,
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
		text: 'WE ZIEN DAT WE VANAF HET INTERNE SSC-ICT NETWERK WEL BIJ DE WERKPLEK KUNNEN MAAR NIET VANAF HET INTERNET.',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 70,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 334,
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
		text: 'WIJ HEBBEN NET DE SERVERDATA VAN ONS OVERHEIDSDATACENTER ONTVANGEN, KAN JIJ ZIEN OF ER IETS NIET KLOPT?',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 70,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 334,
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
		positionY: 190,
		positionX: 360,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
