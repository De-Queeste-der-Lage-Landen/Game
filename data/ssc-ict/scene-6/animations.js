import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'HALLO HELD, WIJ KUNNEN JOUW HULP GOED GEBRUIKEN!',
		hasTextCloud: 'normal',
		positionY: 125,
		positionX: 120,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 204,
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
		text: '...ZOALS JE ZIET ZITTEN WE MIDDEN IN EEN DDOS-AANVAL, DUS AAN DE SLAG',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 130,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 164,
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
		positionY: 190,
		positionX: 345,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
