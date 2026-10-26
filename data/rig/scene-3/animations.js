import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'GEZELLIG DAT JE MEE WIL DOEN MET DE PUBQUIZ, WIL JE IN TEAM <light-orange>DATA</light-orange>, <light-orange>SOFTWARE</light-orange> OF <light-orange>SECURITY</light-orange>?',
		hasTextCloud: 'centered',
		positionY: 110,
		positionX: 125,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 245,
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
		name: 'arrow-green-1',
		img: 'arrow-green',
		positionY: 154,
		positionX: 560,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'arrow-green-2',
		img: 'arrow-green',
		positionY: 154,
		positionX: 677,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'arrow-green-3',
		img: 'arrow-green',
		positionY: 154,
		positionX: 794,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
