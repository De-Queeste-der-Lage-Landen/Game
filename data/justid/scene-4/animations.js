import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'DIT IS <purple-dark>NIET DE JUISTE PERSOON</purple-dark>, AL LIJKT HIJ ER ALS TWEE DRUPPELS WATER OP!',
		hasTextCloud: 'centered',
		positionY: 45,
		positionX: 295,
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
		name: 'text-cloud-2',
		text: 'ZIJN VINGERAFDRUK KOMT NIET OVEREEN...',
		hasTextCloud: 'centered',
		positionY: 90,
		positionX: 290,
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
		name: 'text-cloud-3',
		text: 'WE ZIJN DUS WARM, MAAR KUN JE NOG IETS DIEPER GRAVEN?',
		hasTextCloud: 'centered',
		positionY: 70,
		positionX: 290,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 214,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD,
			startGameAfterLoading: 'find-suspect',
			activeSuspect: 1,
			showLoadingScreen: false
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	}
];
