import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'HELEMAAL TOP EN NET OP TIJD! DANK JE WEL, HELD!',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 390,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 184,
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
		text: 'KAN JE ONS MET NOG EEN PROBLEEM HELPEN?',
		hasTextCloud: 'center',
		positionY: 110,
		positionX: 400,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 184,
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
		text: 'STUDENTEN PROBEREN HUN DIPLOMA’S IN TE ZIEN, MAAR ER STAAN GEEN GEBOORTEDATA OP.',
		hasTextCloud: 'normal',
		positionY: 135,
		positionX: 290,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 400,
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
		text: 'KAN JIJ EENS KIJKEN WAT ER MIS GAAT?',
		hasTextCloud: 'normal',
		positionY: 140,
		positionX: 380,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 204,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD,
			showLoadingScreen: true,
			startGameAfterLoading: 'facet-issue'
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
		positionY: 180,
		positionX: 268,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
