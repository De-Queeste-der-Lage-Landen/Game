import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'DAT ZIET ER EEN STUK LOGISCHER UIT. GOED GEDAAN, HELD!',
		hasTextCloud: 'centered',
		positionY: 110,
		positionX: 95,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 135,
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
		text: 'WE STAAN HELAAS VOOR NOG EEN ANDERE UITDAGING...',
		hasTextCloud: 'centered',
		positionY: 110,
		positionX: 90,
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
		text: 'WE MOETEN ZO VOOR 8 UUR DE DATA AANLEVEREN... MAAR...',
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 70,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 165,
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
		text: '...ER ZIT EEN AFWIJKING IN ONZE INFORMATIE, DIE DUIDT OP EEN <red>CODE ROOD</red> IN ZUID-HOLLAND, TERWIJL HET ZONNIG EN DROOG IS.',
		hasTextCloud: 'centered',
		positionY: 90,
		positionX: 25,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 285,
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
		text: 'KUN JIJ ONTDEKKEN OF ER EEN FOUTJE IN ONZE INFORMATIE FEED IS GESLOPEN EN DIT OP TIJD OPLOSSEN?',
		hasTextCloud: 'centered',
		positionY: 108,
		positionX: 40,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 245,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD,
			startGameAfterLoading: 'report-issue',
			showLoadingScreen: true
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	}
	// {
	// 	name: 'text-cloud-6',
	// 	text: 'HET IS AL BIJNA 8 UUR EN IK MOET ELK MOMENT NAAR DE STUDIO...',
	// 	hasTextCloud: 'centered',
	// 	positionY: 110,
	// 	positionX: 100,
	// 	fontSize: 10,
	// 	lineHeight: 20,
	// 	fill: '#000000',
	// 	wordWrap: true,
	// 	wordWrapWidth: 145,
	// 	align: 'center',
	// 	interaction: {
	// 		type: types.CLOSE_TEXT_CLOUD,
	// 		startGameAfterLoading: 'report-issue',
	// 		showLoadingScreen: true
	// 	},
	// 	animation: {
	// 		type: animationTypes.FADE_IN
	// 	}
	// }
];
