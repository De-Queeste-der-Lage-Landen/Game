import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'SSHHT WE MOETEN FLUISTEREN, ER IS EEN EXAMEN BEZIG. OEI, ER SCHIJNT IETS MIS TE GAAN MET DE CIJFERS!',
		hasTextCloud: 'normal',
		positionY: 102,
		positionX: 600,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 244,
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
		text: 'KUN JIJ Z.S.M. BIJ DEVELOPMENT KIJKEN WAT ER MISGAAT?',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 640,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 180,
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
		positionY: 145,
		positionX: 811,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
