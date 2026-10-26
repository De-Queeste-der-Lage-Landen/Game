import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'HEY HELD, RELAXT DAT JE ONS KOMT HELPEN: NEEM PLAATS AAN HET VRIJE BUREAU!',
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
		text: 'VOOR JE BEGINT MOET JE DIT WETEN:',
		hasTextCloud: 'normal',
		positionY: 140,
		positionX: 395,
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
		text: 'BIJ EEN NORMERINGSTERM (N) VAN PRECIES 1 TREEDT DE HOOFDRELATIE IN WERKING.',
		hasTextCloud: 'normal',
		positionY: 135,
		positionX: 290,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 340,
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
		text: 'BIJ EEN NORMERINGSTERM (N) GROTER DAN 1 GELDT HET LAAGSTE CIJFER UIT DE HOOFDRELATIE EN GRENSRELATIES 1 EN 4.',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 280,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 444,
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
		text: 'BIJ EEN NORMERINGSTERM (N) KLEINER DAN 1 GELDT HET HOOGSTE CIJFER UIT DE HOOFDRELATIE EN GRENSRELATIES 2 EN 3.',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 280,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 444,
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
		positionY: 180,
		positionX: 268,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
