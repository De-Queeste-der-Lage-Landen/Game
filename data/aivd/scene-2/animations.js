import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-2',
		text: 'WELKOM IN DE BEZOEKERSRUIMTE VAN DE AIVD.',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 155,
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
	},
	{
		name: 'text-cloud-3',
		text: 'DE GATEKEEPER IS NU NOG IN BESPREKING; JE ZULT TOT 12:00 MOETEN WACHTEN...',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 135,
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
		name: 'text-cloud-4',
		text: 'KIJK ONDERTUSSEN LEKKER ROND, WANT ER IS VEEL TE ONTDEKKEN.',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 135,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 190,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
