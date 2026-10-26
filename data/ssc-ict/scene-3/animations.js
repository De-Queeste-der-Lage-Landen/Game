import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'DE FOUT LIJKT BIJ <light-purple>NETWERKBEHEER</light-purple> TE LIGGEN, LOOP MAAR GELIJK DOOR!',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 410,
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
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 120,
		positionX: 811,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
