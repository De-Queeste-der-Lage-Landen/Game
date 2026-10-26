import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 200,
		positionX: 263,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'text-cloud-1',
		text: 'HEY HELD, WAT FIJN DAT JE ONS KOMT HELPEN: NEEM PLAATS AAN HET <light-blue>VRIJE BUREAU!</light-blue>',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 355,
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
			stopAfterClose: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-2',
		text: 'HET LIJKT EROP DAT DE <light-blue>PARAMETERS</light-blue> IN DE <light-blue>DATASET</light-blue> IN DE WAR ZIJN GERAAKT... KAN JIJ DE DATA OP DE JUISTE VOLGORDE ZETTEN?',
		hasTextCloud: 'normal',
		positionY: 85,
		positionX: 480,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 225,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD,
			startGameAfterLoading: 'weather-predictions',
			showLoadingScreen: true
		},
		animation: {
			type: animationTypes.FADE_IN,
			offset: '+=250',
			pauseAfter: true
		}
	}
];
