import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'GOED GEDAAN! WE ZIJN BENIEUWD NAAR WAT JE ONS NOG MEER TE BIEDEN HEBT.',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 465,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 175,
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
		name: 'tech-hero-pass',
		img: 'tech-hero-pass',
		positionY: 50,
		positionX: 245,
		interaction: {
			type: types.NEXT_SCENE
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
