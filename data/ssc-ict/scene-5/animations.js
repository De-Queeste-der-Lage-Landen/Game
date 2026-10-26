import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	// {
	// 	name: 'text-cloud-1',
	// 	text: 'IK ZIE GEEN FOUTEN IN DE SERVERDATA, DAN MOET HET TOCH IETS ANDERS ZIJN...',
	// 	hasTextCloud: 'normal',
	// 	positionY: 125,
	// 	positionX: 220,
	// 	fontSize: 10,
	// 	lineHeight: 20,
	// 	fill: '#000000',
	// 	wordWrap: true,
	// 	wordWrapWidth: 236,
	// 	align: 'center',
	// 	interaction: {
	// 		type: types.GO_TO_NEXT_ANIMATION_ELEMENT
	// 	},
	// 	animation: {
	// 		type: animationTypes.FADE_IN,
	// 		pauseAfter: true,
	// 		reverseAnimation: true
	// 	}
	// },
	{
		name: 'text-cloud-1',
		text: 'OH NEE HET IS EEN DDOS-AANVAL, OP NAAR HET SOC!',
		hasTextCloud: 'normal',
		positionY: 125,
		positionX: 140,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 152,
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
		positionY: 120,
		positionX: 811,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
